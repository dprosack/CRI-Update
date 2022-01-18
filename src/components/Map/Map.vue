<template class="map">
    <div id="viewDiv" class="main">
        <div id="info" class="esri-widget">
            <v-btn elevation="2" @click="addRoad()" id="addBtn">{{addButton}}</v-btn>
             <div>
                <h2>County Mileage</h2>
                <p v-cloak>County: {{county}} / User Name: {{username}}</p>
                <p v-cloak>Previous Total Mileage: {{countyTotal}}</p>
                <p v-cloak>Current Mileage: {{currentMiles}}</p>
                <p v-if="isNaN(countyTots)&&isNaN(modifyLine)&&isNaN(modifyLength) ? 0: countyTots">New Total Miles: {{countyTots}}</p>
            </div>
        </div>
        <div id="step"><stepper/></div>
     </div>
     
</template>

<script>

import {addRoadbed, updateLength,modifyRoadbed, zoomExtents, hightlightFeat} from '../Map/editFunc'
import {criConstants} from '../../common/cri_constants'
import {roadInfo} from '../../store'
import stepper from '../../components/stepperQuestion.vue'
//import { gLayer } from '../Map/map';
//import Graphic from "@arcgis/core/Graphic";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

export default {
    name: 'Map',
    components: {stepper},
    data(){
        return{
            stepper: false,
            addButton: "add Road",
            previousTotal: 0,
            county: "Travis",
            username: 'DPROSACK',
            countyTotal: criConstants.countyMiles,
            lineLength: {},
            newMiles: '',
            modifyLine: 0,
            modifyLength: 0
        }
    },
    async mounted() {
        const app = await import('../Map/map');
        app.initialize(this.$el); 
        zoomExtents();
        hightlightFeat();
        //console.log(this.captureMiles)
        
    },
    methods: {
        addRoad() {
            addRoadbed().then(result=>{
            this.previousTotal += parseFloat(result.toFixed(3))
            })
        },
        // giveme(e){
        //     console.log(e)
        //     this.countyTotal = e;
        // }
        
    },
    
    watch:{
       previousTotal() {
            addRoadbed().then(result=>
            this.previousTotal += parseFloat(result.toFixed(3)))
            document.getElementById("step").style.width='450px'
        },

        modifyLine:{
             handler: async function(){
                let modify = await modifyRoadbed(true)
                
                roadInfo.returnRoadInfo = modify.features[0].attributes['street_nm']
                //criConstants.roadbedName = modify.features[0].attributes['street_nm'];
                //criConstants.roadbedDesign = modify.features[0].attributes['design'];
                //criConstants.roadbedSurface = modify.features[0].attributes['surface'];
                //criConstants.numLane = modify.features[0].attributes['num_lanes']

                this.modifyLine += parseFloat(geometryEngine.geodesicLength(modify.features[0].geometry, "miles").toFixed(3))
                document.getElementById("step").style.width='450px'

            },
            immediate: true,
            
        },
        
       modifyLength:{
            handler: function(){
                updateLength().then(result => 
                this.modifyLength += parseFloat(result.toFixed(3)))
            },
            immediate: true, 
        },
    },

    computed:{
        countyTots: function(){
            return Number(this.countyTotal) + Number(this.previousTotal) + Number(this.modifyLength) + Number(this.modifyLine)
        },

        currentMiles: function(){
            return this.previousTotal + this.modifyLength + this.modifyLine
        }
    }

};
</script>

<style scoped>

#viewDiv {
    position: absolute;
    top: 0px;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .main{
  position: absolute;
  width: 100%;
  height: 100%;
}

  #info{
  position: absolute;
  padding: 10px;
  top: 10%; 
  left: 80%;
  width: 300px;
}
#step{
    position: fixed;
    width: 0;
    left: 0;
    top: 0;
    transition: 0.5s;
    z-index: 1
}


</style>