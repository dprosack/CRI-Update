<template>
<v-app>
  <v-stepper
    v-model="e6"
    vertical>
    <v-stepper-step
      :complete="e6 > 1"
      step="1">
      Road Attribution:
      <small>Fill out this form to complete editing your road.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card><v-text-field v-model="roadbedName" label="Road Name"></v-text-field>
      </v-card>
      <v-btn
        color="primary"
        @click="e6 = 2">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2">
      Road Design
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card><v-select v-model="roadbedDesign" :items="design" label="Design" outlined filled></v-select>
      </v-card>
      <v-btn
        color="primary"
        @click="e6 = 3">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3">
      Road Surface
    </v-stepper-step>

    <v-stepper-content step="3">
        <v-card>
          <v-select v-model="roadbedSurface" :items="surface" label="Road Surface" outlined ></v-select>
          <v-row >
               <v-col sm="6">
                 <v-text-field label='A'></v-text-field>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B'></v-text-field>
               </v-col>
          </v-row>
        <v-card v-for="item in roadSurface" :key="item">
            <v-select :items="surface" label="Road Surface" outlined ></v-select>
            <v-row >
               <v-col sm="6">
                 <v-text-field label='A'></v-text-field>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B'></v-text-field>
               </v-col>
            </v-row>
        </v-card>
        <v-btn @click="addRoadSurface()">add additional Road Surface Types </v-btn>
        </v-card>
        <v-btn
            color="primary"
            @click="e6 = 4">
            Continue
        </v-btn>
        <v-btn @click="cancel()" text>
            Cancel
        </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Number of Lanes
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card><v-select v-model="numLane" :items="lanes" label="Number of Lanes" outlined filled></v-select>
      </v-card>
      <v-btn
        color="primary"
        @click="e6 = 1">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
  
</v-app>
</template>

<script>
//import { criConstants } from '../common/cri_constants';

import {modifyRoadbed} from '../components/Map/editFunc'


export default {
    name:"stepper",
    data () {
      return {
        e6: 1,
        design: ['One Way', 'Two Way', 'Boulevard'],
        surface: ['Paved','Brick','Dirt/Natural','Gravel','Concrete'],
        lanes:[1,2,3,4,5,6],
        counter:0,
        roadSurface:[],
        roadbedName:'',
        roadbedDesign:'',
        roadbedSurface:'',
        numLane:0,
        modifyStatus: false
      }
    },
    mounted(){
      
    },

    watch:{
      roadbedName:{
             handler: async function(){
               let modify = await modifyRoadbed(false)
               let design = [{num:'1', name:'One Way'}, {num:'2',name:'Two Way'}, {num:'3',name:'Boulevard'}]
               let surface = [{num:'10', name:'Paved'}, {num:'11', name:'Brick'},{num:'12', name:'Dirt/Natural'},{num:'13', name:'Gravel'},{num:'2', name:'Concrete'}]
               console.log(modify.features[0].attributes['surface'])
               this.roadbedName = modify.features[0].attributes['street_nm']
               for(let i in design){
                if(design[i]['num'] === modify.features[0].attributes['design']){
                  this.roadbedDesign = design[i]['name']
                }
               }
               for(let i in surface){
                 if(surface[i]['num'] === modify.features[0].attributes['surface']){
                  this.roadbedSurface = surface[i]['name']
                 }
               }
               this.numLane = modify.features[0].attributes['num_lanes']
 
            },
             immediate: true,
         },
    },

    methods:{
        cancel(){
            document.getElementById("step").style.width = '0px'
        },
        addRoadSurface(){
             let count= this.counter++
             this.roadSurface.push(count)
           },
    }
}
</script>
