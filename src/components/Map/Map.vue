<template>
    <div id="viewDiv" class="main">
        <mileageReport />
        <div id="info" class="esri-widget">
            <v-btn elevation="2" @click="addRoad()" id="addBtn">{{addButton}}</v-btn>
             <div>
                <h2>County Mileage</h2>
                <p v-cloak>County: {{county}} / User Name: {{username}}</p>
                <p v-cloak>Previous Total Mileage: {{countyTotal}}</p>
                <p v-cloak>Current Mileage: {{currentMiles}}</p>
                <p v-if="isNaN(countyTots) ? 0: countyTots">New Total Miles: {{countyTots}}</p>
            </div>
        </div>
     </div>
</template>

<script>

import {addRoadbed, updateLength,modifyRoadbed, zoomExtents, hightlightFeat} from '../Map/editFunc'
import mileageReport from './mileageReport.vue'

//import { gLayer } from '../Map/map';
//import Graphic from "@arcgis/core/Graphic";
//import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

export default {
    name: 'Map',
    components: {mileageReport
    },
    props:{
        addRoadbed: Function,
        addLen: Function
    },
    data(){
        return{
            addButton: "add Road",
            previousTotal: 0,
            county: "Travis",
            username: 'DPROSACK',
            countyTotal:120999,
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
        
    },
    methods: {
        addRoad() {
            addRoadbed().then(result=>{
            this.previousTotal += parseFloat(result.toFixed(3))
            })
        },
    },

    watch:{
       previousTotal() {
            addRoadbed().then(result=>
            this.previousTotal += parseFloat(result.toFixed(3))
            )
        },

        modifyLine:{
             handler: function(){
                modifyRoadbed().then(result => 
                this.modifyLine += parseFloat(result.toFixed(3)))
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
            return this.countyTotal + this.previousTotal + this.modifyLength + this.modifyLine
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

</style>