//import const from map.js
import {sketch, view, featLayer, gLayer, countyOfficialInfo, map, rdbdSrfcAsst, rdbdDsgnAsst, rdbdNameAsst, rdbdLaneAsst} from '../Map/map'
import {cntyNbrNm} from '../../common/txCnt'
import {roadInfo} from '../../store'
//esri js geometry engine import
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Graphic from "@arcgis/core/Graphic";
import Query from "@arcgis/core/rest/support/Query";
import { criConstants } from '../../common/cri_constants';


//add login info
// export function loginAGOL(){

// }

//get county name and road totals
export async function countyInfo(){
  let countyInfoPromise =  new Promise(function(res){
    let queryUrl = window.location.href
    let crInfo = queryUrl.split('http://localhost:8080/')[1]
    //console.log(crInfo.toString())
    for (let j=0; j < cntyNbrNm.length; j++){
      console.log(cntyNbrNm[j][crInfo])
      if(cntyNbrNm[j][crInfo]){
        let whereStatement = `County_NBR = '${crInfo}'`
        roadInfo.getcntyNmbr = crInfo
        roadInfo.getcntyName = cntyNbrNm[j][crInfo]
        console.log(whereStatement)
        const query = new Query();
        query.where = whereStatement
        query.outFields = [ "*" ]
        let newQuery = countyOfficialInfo.queryFeatures(query)
        res({response:true, nbr:parseInt(crInfo), query:newQuery})
      }
      else{
        res({response:false})
      }
    }
    //let crValidation = /^[0-9]{1,3}$/
  })
  
  let countyInfoReturn = await countyInfoPromise;
  return countyInfoReturn
}

export async function addRoadbed(){
    return await new Promise(function(res){
        sketch.create("polyline",{mode:"click", hasZ: false})
        sketch.on('create', (event) => {
            let lengthMiles;
            if(event.state === "complete"){
                //console.log("This is the previous total length: ",this.previousTotal)
                lengthMiles = geometryEngine.geodesicLength(event.graphic.geometry, "miles")
                //addLen(lengthMiles);
                console.log("This is the current line length: ", parseFloat(lengthMiles.toFixed(3)));
                res(lengthMiles);
            }
        });
    }) 
}

export async function modifyRoadbed(bool){
  let promise = new Promise(function(res){
    view.on("double-click", (event) => {
      let opts = { include: featLayer }
      view.hitTest(event, opts).then(function(response){
        for(let i=0; i < response.results.length; i++){
          if(response.results[i].graphic.geometry !== null && response.results[i].graphic.sourceLayer !== null){
            let queryFeat = featLayer.queryFeatures({
              objectIds: [response.results[0].graphic.attributes.objectid],
              outFields: ["*"],
              returnGeometry: true,
              returnM: true
            })
            queryFeat.then(result => res(result))
          }
        }
      })
    })
  })

  let feature = await promise;
  //rdbdSrfc.then(result => console.log(result))
  const query = new Query();
  query.where = `RDBD_GMTRY_LN_ID = ${feature.features[0].attributes.gid}`
  query.outFields = [ "*" ]
  const rdbdSrfc = rdbdSrfcAsst.queryFeatures(query)
  const rdbdDsgn = rdbdDsgnAsst.queryFeatures(query)
  const rdbdName = rdbdNameAsst.queryFeatures(query)
  const rdbdLane = rdbdLaneAsst.queryFeatures(query)
  const rdbdSrfcAtt = await rdbdSrfc
  const rdbdDsgnAtt = await rdbdDsgn
  const rdbdNameAtt = await rdbdName
  const rdbdLaneAtt = await rdbdLane
  console.log(rdbdSrfcAtt)
  let rdbdSrfArry = [];
  if(rdbdSrfArry.length){
    rdbdSrfArry.length = 0
  }
  for(let srf in rdbdSrfcAtt.features){
    let surface = criConstants.surface
    for(let i in surface){
      if(surface[i]['num'] === rdbdSrfcAtt.features[srf].attributes.srfc_type_id){
        rdbdSrfcAtt.features[srf].attributes.srfc_type_id = surface[i]['name']
      }
    }
    rdbdSrfArry.push(rdbdSrfcAtt.features[srf].attributes)
  }
  console.log(rdbdSrfArry)
  rdbdSrfArry.sort((a,b)=>(a.asset_ln_begin_dfo_ms > b.asset_ln_begin_dfo_ms)? 1:-1)
  roadInfo.getSurface = rdbdSrfArry
  roadInfo.getDesign = rdbdDsgnAtt.features[0].attributes.rdway_dsgn_type_dscr
  roadInfo.getName = rdbdNameAtt.features[0].attributes.st_defn_nm
  roadInfo.getLane = rdbdLaneAtt.features[0].attributes.nbr_thru_lane_cnt
  defineGraphic(feature,bool)
  return feature//geometryEngine.geodesicLength(feature.features[0].geometry, "miles")
}

export function zoomExtents(){
  view.on('mouse-wheel',() => {
    console.log(view.zoom)
    view.zoom < 9 ?  featLayer.visible = false : featLayer.visible = true;
    view.zoom < 9 ? map.basemap = criConstants.basemap : map.basemap = 'satellite'
    view.zoom > 9 ? map.basemap = 'satellite' : criConstants.basemap
  })
}

export function hightlightFeat(){
  view.on('pointer-move', (event) => {
    const opts = {include: featLayer}
    view.hitTest(event, opts).then(function(response){
      if (response.results.length) {
        let editFeature = response.results[0].graphic;
        view.whenLayerView(editFeature.layer).then(function(layerView){
          let highlight = layerView.highlight(editFeature);
          view.on('pointer-move', (event) => {
            view.hitTest(event, opts).then(function(response){
              if(response.results.length === 0){
                highlight.remove()
              }
            })
          })
        })
      }
    })
  })
}

function defineGraphic(graphics, dups){
  if (dups === true){
    let newGraphic = new Graphic({
    geometry: {
      type: "polyline",
      paths: graphics.features[0].geometry.paths[0],
      hasM: true,
      spatialReference: {
        wkid: 3857
      }
    },

    attributes: {
      objectid: graphics.features[0].attributes.objectid,
      roadbedName: roadInfo.getName,
      roadbedDesign: roadInfo.getDesign,
      roadbedSurface: roadInfo.getSurface,
      numLane: roadInfo.getLane,
    },
              
    symbol: {
      type: "simple-line",
      color: [0, 0, 255],
      width: 2,
      style: "dash"
    }
  })
  let objectidList = [];
  gLayer.graphics.add(newGraphic);
  console.log(gLayer)
  for(let id in gLayer.graphics.items)
    if(gLayer.graphics.items[id].attributes !== null){
      objectidList.push(gLayer.graphics.items[id].attributes.objectid)
    }
    featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and cnty_nm = '${roadInfo.getcntyName}'`
  }
}

export async function updateLength(){
  let oldLength;
  view.on("click", function (event) {
    let opts = {include: gLayer}
    if (sketch.state === "active") {
      return;
    }
    
    view.hitTest(event,opts)
      .then(function (response) {
        let results = response.results;
        results.forEach(function (result) {
          if(result.graphic.layer === sketch.layer && result.graphic.attributes)
          {
            sketch.update([result.graphic], { tool: "reshape" });
          }
          if(result.graphic.layer === sketch.layer && !result.graphic.attributes)
          {
            sketch.update([result.graphic], { tool: "reshape" });
          }
        });
        oldLength = geometryEngine.geodesicLength(response.results[0].graphic.geometry, "miles")
      })
      .catch(err => err)
    });
  
  let updatePromise = new Promise(function(res){
    view.when(function(){
      sketch.on('update', (event)=>{
        let newLength;
    
        if(!event.toolEventInfo && event.state === 'complete'){
          newLength = geometryEngine.geodesicLength(event.graphics[0].geometry, "miles")
          sketch.complete();
        }
        const deltaLength = newLength - oldLength
        if(oldLength < newLength){
          //console.log('add')
          let addMiles = Math.abs(deltaLength)
          res(addMiles)
        }
        if (oldLength > newLength){
          //console.log('sub')
          let subMiles = -Math.abs(deltaLength)
          res(subMiles)
        }
      })
    })
  })
  updatePromise.catch(err => alert(err))
  let mileage = await updatePromise;
  
  return mileage
}

export function stopEditing(){
  sketch.cancel()
}

export async function getGraphic(){
  let getGraphPromise = new Promise(function(resp){
      view.on("immediate-click", function(event){
        let option = {include: gLayer}
        if (sketch.state === "active") {
          return;
        }
          view.when(function(){
            view.hitTest(event,option)
            .then(function(response){
              if(response.results.length){
                roadInfo.getName = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedName'] : null
                roadInfo.roadbedSurface = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedSurface'] : null
                roadInfo.getDesign = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedDesign'] : null
                roadInfo.getSurface = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedSurface'] : null
                roadInfo.getLane = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['numLane'] : 0
                resp(1)
              }
            })
          })
      });
  });
 let returnGetGraph = await getGraphPromise;
 return returnGetGraph
}

export async function getFeature(){
  let getGraphPromise = new Promise(function(resp){
      view.on("immediate-click", function(event){
        let option = {include: featLayer}
      
          view.when(function(){
            view.hitTest(event,option)
            .then(function(response){
              if(response.results.length){
                let queryFeat = featLayer.queryFeatures({
                  objectIds: [response.results[0].graphic.attributes.objectid],
                  outFields: ["*"],
                  returnGeometry: true,
                  returnM: true
                })
                queryFeat.then(result => resp(result))
              }
            })
          })
      });
  });
  //create one function for query tables
 let returnGetGraph = await getGraphPromise;
 const query = new Query();
  query.where = `RDBD_GMTRY_LN_ID = ${returnGetGraph.features[0].attributes.gid}`
  query.outFields = [ "*" ]
  const rdbdSrfc = rdbdSrfcAsst.queryFeatures(query)
  const rdbdDsgn = rdbdDsgnAsst.queryFeatures(query)
  const rdbdName = rdbdNameAsst.queryFeatures(query)
  const rdbdLane = rdbdLaneAsst.queryFeatures(query)
  const rdbdSrfcAtt = await rdbdSrfc
  const rdbdDsgnAtt = await rdbdDsgn
  const rdbdNameAtt = await rdbdName
  const rdbdLaneAtt = await rdbdLane
  console.log(rdbdSrfcAtt)
  let rdbdSrfArry = [];
  if(rdbdSrfArry.length){
    rdbdSrfArry.length = 0
  }
  for(let srf in rdbdSrfcAtt.features){
    console.log(rdbdSrfcAtt.features[srf])
    let surface = criConstants.surface
    for(let i in surface){
      if(surface[i]['num'] === rdbdSrfcAtt.features[srf].attributes.srfc_type_id){
        rdbdSrfcAtt.features[srf].attributes.srfc_type_id = surface[i]['name']
      }
    }
    console.log(rdbdSrfcAtt.features[srf].attributes)
    rdbdSrfArry.push(rdbdSrfcAtt.features[srf].attributes)
  }
  console.log(rdbdSrfArry)
  rdbdSrfArry.sort((a,b)=>(a.asset_ln_begin_dfo_ms > b.asset_ln_begin_dfo_ms)? 1:-1)
  roadInfo.getSurface = rdbdSrfArry
  roadInfo.getDesign = rdbdDsgnAtt.features[0].attributes.rdway_dsgn_type_dscr
  roadInfo.getName = rdbdNameAtt.features[0].attributes.st_defn_nm
  roadInfo.getLane = rdbdLaneAtt.features[0].attributes.nbr_thru_lane_cnt
  console.log(rdbdSrfcAtt.features[0].attributes)
 return 1
}

// export async function HoverAtt(){
//   view.on('pointer-move', (event) => {
//     const opts = {include: featLayer}
//     view.hitTest(event, opts).then(function(response){
//       if (response.results.length) {
//         let editFeature = response.results[0].graphic;
//         view.whenLayerView(editFeature.layer).then(function(layerView){
//          console.log(layerView)
//         })
//       }
//     })
//   })
  // console.log(hoverFeature)
  // const query = new Query();
  // query.where = `RDBD_GMTRY_LN_ID = ${hoverFeature.features[0].attributes.gid}`
  // query.outFields = [ "*" ]
  // const rdbdSrfc = rdbdSrfcAsst.queryFeatures(query)
  // const rdbdDsgn = rdbdDsgnAsst.queryFeatures(query)
  // const rdbdName = rdbdNameAsst.queryFeatures(query)
  // const rdbdLane = rdbdLaneAsst.queryFeatures(query)
  // const rdbdSrfcAtt = await rdbdSrfc
  // const rdbdDsgnAtt = await rdbdDsgn
  // const rdbdNameAtt = await rdbdName
  // const rdbdLaneAtt = await rdbdLane
  // console.log(rdbdSrfcAtt)
  // let rdbdSrfArry = [];
  // if(rdbdSrfArry.length){
  //   rdbdSrfArry.length = 0
  // }
  // for(let srf in rdbdSrfcAtt.features){
  //   console.log(rdbdSrfcAtt.features[srf])
  //   let surface = criConstants.surface
  //   for(let i in surface){
  //     if(surface[i]['num'] === rdbdSrfcAtt.features[srf].attributes.srfc_type_id){
  //       rdbdSrfcAtt.features[srf].attributes.srfc_type_id = surface[i]['name']
  //     }
  //   }
  //   console.log(rdbdSrfcAtt.features[srf].attributes)
  //   rdbdSrfArry.push(rdbdSrfcAtt.features[srf].attributes)
  // }
  // console.log(rdbdSrfArry)
  // rdbdSrfArry.sort((a,b)=>(a.asset_ln_begin_dfo_ms > b.asset_ln_begin_dfo_ms)? 1:-1)
  // roadInfo.getSurface = rdbdSrfArry
  // roadInfo.getDesign = rdbdDsgnAtt.features[0].attributes.rdway_dsgn_type_dscr
  // roadInfo.getName = rdbdNameAtt.features[0].attributes.st_defn_nm
  // roadInfo.getLane = rdbdLaneAtt.features[0].attributes.nbr_thru_lane_cnt
  // console.log(rdbdSrfcAtt.features[0].attributes)
//   return 1
// }

// export async function deleteGeom(){
//   let delPromise = new Promise(function(res){
//     view.on("click", (event) => {
//       let opts = { include: featLayer }
//       view.hitTest(event, opts).then(function(response){
//         for(let i=0; i < response.results.length; i++){
//           if(response.results[i].graphic.geometry !== null && response.results[i].graphic.sourceLayer !== null){
//             let queryFeat = featLayer.queryFeatures({
//               objectIds: [response.results[0].graphic.attributes.objectid],
//               outFields: ["*"],
//               returnGeometry: true,
//               returnM: true
//             })
//             queryFeat.then(result => res(result))
//           }
//         }
//       })
//     })
//   })

//   let retdelPromise = await delPromise
//   console.log(retdelPromise)
//   let newDelGraphic = new Graphic({
//     geometry: {
//       type: "polyline",
//       paths: retdelPromise.features[0].geometry.paths[0],
//       hasM: true,
//       spatialReference: {
//         wkid: 3857
//       }
//     },

//     attributes: {
//       objectid: retdelPromise.features[0].attributes.objectid
//     },
              
//     symbol: {
//       type: "simple-line",
//       color: [0, 0, 255],
//       width: 2,
//       style: "dash"
//     }
//   })
//   let delobjectidList = [];
//   delgLayer.graphics.add(newDelGraphic);
//   for(let id in delgLayer.graphics.items)
//     if(delgLayer.graphics.items[id].attributes !== null){
//       delobjectidList.push(delgLayer.graphics.items[id].attributes.objectid)
//     }
//     featLayer.definitionExpression = `OBJECTID not in (${delobjectidList}) and cnty_nm = '${roadInfo.getcntyName}'`
//     console.log(delgLayer)
// }

// export async function getM(){
//   let mPromise = new Promise(function(res){
//   view.on('click', function(evt){
//     let opts = {include: gLayer}
//     view.hitTest(evt, opts).then(function(response){
//       console.log(response)
//     })
//   })
//   })

// }
