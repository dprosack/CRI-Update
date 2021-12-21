<template>
    <div id="viewDiv" class="main">
        <mileageReport></mileageReport>
        <div id="info" class="esri-widget">
            <v-btn elevation="2" @click="addRoad()">{{addButton}}</v-btn>
             <div>
                <h2>County Mileage</h2>
                <p v-cloak>County: {{county}} / User Name: {{username}}</p>
                <p v-cloak>Previous Total Mileage: {{countyTotal}}</p>
                <p v-cloak>Current Mileage: {{previousTotal}}</p>
                <p v-if="isNaN(countyTots) ? 0: countyTots">New Total Miles: {{countyTots}}</p>
            </div>
        </div>
     </div>
</template>

<script>

import {addRoadbed} from '../Map/editFunc'
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
            modifyLine: true
        }
    },
    async mounted() {
        const app = await import('../Map/map');
        app.initialize(this.$el);  
    },
    methods: {
        addRoad() {
            addRoadbed().then(result=>
            {
                this.previousTotal === 0 ? this.previousTotal += parseFloat(result.toFixed(3)) : this.previousTotal
            })
        },
    },

    watch:{
       previousTotal() {
            addRoadbed().then(result=>
            this.previousTotal += parseFloat(result.toFixed(3)))
        }
    },

    computed:{
        countyTots: function(){
            return this.countyTotal + this.previousTotal
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