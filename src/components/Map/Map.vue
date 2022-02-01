<template>

    <div id="viewDiv" class="main">
        <div class="banner">
            <v-toolbar dark>
            <v-app-bar-nav-icon @click="expand"></v-app-bar-nav-icon>
            <v-toolbar-title justify="center">Welcome to DUSA</v-toolbar-title>
                    <v-btn color="primary" small @click="addRoad(); snackbar = true" id="addBtn">Add Roads</v-btn>
                    <v-btn color="green" small id="Recertify">Recertify</v-btn>
                    <v-btn style="left: auto" icon><v-icon>mdi-export</v-icon></v-btn>
            </v-toolbar>
        </div>
        
            <div class="text-center">
                <v-snackbar style="bottom:50px;" v-model = snackbar timeout=-1>
                    <v-btn dark color="pink" text @click="snackbar = false; cancelEditing()" width=600> Stop Editing </v-btn>
                </v-snackbar>
            </div>
            
             <div class="mileInfo">
                <v-card dark height="50">
                <v-card-text justify="center" v-if="isNaN(countyTots)&&isNaN(modifyLine)&&isNaN(modifyLength) ? 0: countyTots" v-cloak><p class="font-weight-regular">County: {{county}}&nbsp; &nbsp; &nbsp; User Name: {{username}}
                &nbsp; &nbsp; &nbsp; Previous Total Mileage: {{countyTotal}}&nbsp;&nbsp;&nbsp; 
                Current Mileage: {{currentMiles}}&nbsp;&nbsp;&nbsp; 
                New Total Miles: {{countyTots}}</p></v-card-text>
                <v-btn elevation=0 style="bottom:65px; right: 44%">Criteria</v-btn>
                <v-btn elevation=0 style="bottom:65px; right: 43%">About</v-btn>
                </v-card>
            </div>
                
            
        <div id="step"><stepper/></div>
        <!-- <mapFooter/> -->
    </div>
</template>

<script>
import {addRoadbed, updateLength, zoomExtents, hightlightFeat, stopEditing, modifyRoadbed} from '../Map/editFunc'
import stepper from '../../components/stepperQuestion.vue'
//import mapFooter from '../Map/mapFooter.vue'
import {roadInfo} from '../../store'
//import { gLayer } from '../Map/map';
//import Graphic from "@arcgis/core/Graphic";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

export default {
    name: 'Map',
    components: {stepper},
    data(){
        return{
            snackbar: false,
            stepper: false,
            addButton: "add Road",
            previousTotal: 0,
            county:  roadInfo.getcntyName,
            username: 'DPROSACK',
            countyTotal: roadInfo.getcntyMiles,
            lineLength: {},
            newMiles: '',
            modifyLine: 0,
            modifyLength: 0,
            editTest: false
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
            this.editTest = true
            })
        },
        cancelEditing(){
            stopEditing();
            this.editTest = false
        },
        expand(){
            if (document.getElementById("step").style.width==='0px'){
                document.getElementById("step").style.width='450px'
            }
            else{
                document.getElementById("step").style.width='0px'
            }
            
            
        }
        
    },
    
    watch:{
        editTest:{
            handler: async function(){
                roadInfo.getaddRoad = this.editTest
            }
        },
       previousTotal() {
            addRoadbed().then(result=>
            this.previousTotal += parseFloat(result.toFixed(3)))
            document.getElementById("step").style.width='450px'
            
        },

        modifyLine:{
             handler: async function(){
                let modify = await modifyRoadbed(true)
                
                this.modifyLine += parseFloat(geometryEngine.geodesicLength(modify.features[0].geometry, "miles").toFixed(3))
                console.log(modify.features[0].geometry)
                
            },
            immediate:true,
        },
        
       modifyLength:{
            handler: function(){
                updateLength().then(result =>{
                    console.log(result)
                    this.modifyLength += parseFloat(result.toFixed(3))
                }) 
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
        },

        setaddRoad: function(){
            return roadInfo.getaddRoad = this.editTest
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
    }

.main{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.mileInfo{
    background: gray;
    position: absolute;
    width: 100%;
    height: 10px;
    right: 0%;
    top: 95%;
}

#step{
    position: fixed;
    width: 0;
    left: 0;
    top: 10%;
    transition: 0.5s;
    z-index: 1
}
#addBtn{
    position: absolute;
    width: auto;
    height: 30%;
    top: 40px;
    right: 130px; 
}
#Recertify{
    position: absolute;
    width: auto;
    height: 30%;
    top: 40px;
    right: 250px; 
}
.banner{
    position: absolute;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
}
/* .footer{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 600px;
} */
</style>