import {sketch} from '../Map/map'


import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
//import Graphic from "@arcgis/core/Graphic";

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

// export function cancelAddRdbd() {

// }