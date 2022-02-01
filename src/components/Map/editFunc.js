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
    view.on("immediate-click", (event) => {
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
            // const query = new Query();
            // query.where = `objectid = ${response.results[0].graphic.attributes.objectid}`
            // query.outFields = [ "*" ]
            // let rdbdSrfc = rdbdSrfcAsst.queryFeatures(query)
            // console.log(rdbdSrfc)
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

    let rdbdSrfArry = []
    if(rdbdSrfArry.length){
      rdbdSrfArry.length = 0
    }
    for(let srf in rdbdSrfcAtt.features){
      console.log()
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
    console.log(rdbdSrfcAtt.features[0].attributes)
    
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
      // roadbedName: graphics.features[0].attributes.street_nm,
      // roadbedDesign: graphics.features[0].attributes.design,
      // roadbedSurface: graphics.features[0].attributes.surface,
      // numLane: graphics.features[0].attributes.num_lanes,
      // beginDfo: graphics.features[0].attributes.begin_dfo,
      // endDfo: graphics.features[0].attributes.end_dfo
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
  for(let id in gLayer.graphics.items)
    if(gLayer.graphics.items[id].attributes !== null){
      objectidList.push(gLayer.graphics.items[id].attributes.objectid)
    }
    featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and cnty_nm = '${roadInfo.getcntyName}'`
  }
}

export async function updateLength(){
    let oldlengthMile;
    
    let updatePromise = new Promise(function(res){
      view.on('click', (evt)=>{
        let opts = {include: gLayer}
        view.hitTest(evt, opts).then(function(response){
          sketch.update(response.results[0].graphic,{tool: "reshape"})
          if(response.results.length){ //
            oldlengthMile = geometryEngine.geodesicLength(response.results[0].graphic.geometry, "miles")
            let id = response.results[0].graphic.attributes ? response.results[0].graphic.attributes['objectid'] : 0
            
            sketch.on('update', (event) => {
              let newlengthMiles;
              if(event.state === "complete" && !event.graphics[0].attributes){
                // sketch.update(response.results[0].graphic,{tool: "reshape"})
                newlengthMiles = geometryEngine.geodesicLength(event.graphics[0].geometry, "miles")
              }
              else if(event.state === "complete" && event.graphics[0].attributes['objectid'] === id){
                newlengthMiles = geometryEngine.geodesicLength(event.graphics[0].geometry, "miles")
              }
              
              if(typeof oldlengthMile === "number" && typeof newlengthMiles === "number"){
                let deltaLength = oldlengthMile - newlengthMiles
                if(oldlengthMile < newlengthMiles){
                  console.log('add')
                  oldlengthMile = undefined
                  newlengthMiles = undefined
                  let addMiles = Math.abs(deltaLength)
                  res(addMiles)
                }
                else if (oldlengthMile > newlengthMiles){
                  console.log('sub')
                  oldlengthMile = undefined
                  newlengthMiles = undefined
                  let subMiles = -Math.abs(deltaLength)
                  res(subMiles)
                }
                else if(oldlengthMile === newlengthMiles){
                  oldlengthMile = undefined
                  newlengthMiles = undefined
                }
              }
            })
          }
          // else{
          //   sketch.update(response.results[0].graphic,{tool: "reshape"})
          // }
        })
      })
    });
    let mileages = await updatePromise;
    console.log(mileages)
    return mileages
}


export function stopEditing(){
  sketch.cancel()
}

export async function getGraphic(){
  let graphicPromise = new Promise(function(res){
    view.on('click', (evt)=>{
     let opts = {include: gLayer}
     view.hitTest(evt, opts).then(function(response){
       if(response.results.length){
        roadInfo.getName = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedName'] : null
        roadInfo.getDesign = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedDesign'] : null
        roadInfo.getSurface = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['roadbedSurface'] : null
        roadInfo.getLane = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['numLane'] : 0
        roadInfo.getbeginDfo = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['beginDfo'] : 0
        roadInfo.getendDfo = response.results[0].graphic.attributes !== null ? response.results[0].graphic.attributes['endDfo'] : 0
        res(1)
        console.log(roadInfo.getDesign)
        console.log(roadInfo.getSurface)
       }
       
     })
   })
  })
  
  let returnAttr = await graphicPromise
  return returnAttr
}

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
