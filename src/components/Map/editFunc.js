//import const from map.js
import {sketch, view, featLayer, gLayer, countyOfficialInfo} from '../Map/map'
import {cntyNbrNm} from '../../common/txCnt'
//esri js geometry engine import
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Graphic from "@arcgis/core/Graphic";
import Query from "@arcgis/core/rest/support/Query";



//add login info

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
          }
        }
      })
    })
  })

  let feature = await promise;
  
  defineGraphic(feature,bool)

  return feature//geometryEngine.geodesicLength(feature.features[0].geometry, "miles")
}

export function zoomExtents(){
  view.on('mouse-wheel',() => {
    console.log(view.zoom)
    view.zoom < 9 ?  featLayer.visible = false : featLayer.visible = true;
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
      objectid: graphics.features[0].attributes.objectid
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
    featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and cnty_nm = '${graphics.features[0].attributes.cnty_nm}'`
  }
}

export async function updateLength(){
    let oldlengthMile;
    let newlengthMiles;
    let updatePromise = new Promise(function(res){
      view.on('click', (evt)=>{
        let opts = {include: gLayer}
        view.hitTest(evt, opts).then(function(response){
          if(response.results.length){
            sketch.update(response.results[0].graphic,{tool: "reshape"})

            sketch.on('update', (event) => {
              //console.log(event)
              if(event.state === "start"){
                oldlengthMile = geometryEngine.geodesicLength(event.graphics[0].geometry, "miles")
              }
              if(event.state === "complete"){
                newlengthMiles = geometryEngine.geodesicLength(event.graphics[0].geometry, "miles")
              }

              if(typeof oldlengthMile === "number" && typeof newlengthMiles === "number"){
                let deltaLength = oldlengthMile - newlengthMiles
                if(oldlengthMile < newlengthMiles){
                  let addMiles = Math.abs(deltaLength)
                  res(addMiles)
                }
                else if (oldlengthMile > newlengthMiles){
                  let subMiles = -Math.abs(deltaLength)
                  res(subMiles)
                }
              }  
            })
          }
          })
        })
     
      });

    let mileages = await updatePromise;
    console.log(mileages)
    return mileages
}