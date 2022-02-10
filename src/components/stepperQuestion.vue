<template>
  <v-stepper
    id="stepper"
    v-model="e1"
    vertical
    non-linear
    class="mb-12">
    <v-stepper-step
      editable
      :complete="e1 > 1"
      step="1">
      Road Name: 
      <small>Fill out this form to complete editing your road.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card><v-text-field v-model="roadbedName" label="Road Name" :disabled="graphic ? disabled : ''"></v-text-field>
      </v-card>
      <v-btn
        color="primary"
        @click="e1 = 2">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      editable
      :complete="e1 > 2"
      step="2">
      Road Design
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card><v-select v-model="roadbedDesign" :items="design" label="Design" outlined filled :disabled="graphic ? disabled : ''"></v-select>
      </v-card>
      <v-btn
        color="primary"
        @click="e1 = 3">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>
    <v-stepper-step
      editable
      :complete="e1 > 3"
      step="3">
      Road Surface
    </v-stepper-step>
    <v-stepper-content step="3">
      
        <v-card  v-if='graphic===true'>
          <div class="scroller"> 
          <v-col v-for="(item,index) in rdbdSurf" :key="index">
          <v-select :items="surface" label="Road Surface" outlined v-model="item.srfc_type_id"></v-select> <!-- //v-model="roadbedSurface" -->
          <v-row>
               <v-col sm="6">
                 <v-text-field label='A' v-model="item.asset_ln_begin_dfo_ms"></v-text-field>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B' v-model="item.asset_ln_end_dfo_ms"></v-text-field>
               </v-col>
          </v-row>
          <v-btn id="currentSurf"><img src="..\assets\outline_delete_black_24dp.png" @click="testFunc()"></v-btn>
          </v-col>
        <v-card v-for="item in roadSurface" :key="item">
            <v-select :items="surface" label="Road Surface" outlined ></v-select>
            <v-row >
               <v-col>
                 <v-text-field label='A' ></v-text-field><v-btn id="editbdfo" icon x-small elevation=0><v-icon>mdi-pencil</v-icon></v-btn>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B'></v-text-field><v-btn id="editedfo" icon x-small elevation=0><v-icon>mdi-pencil</v-icon></v-btn>
               </v-col>
            </v-row>
            <v-btn id="addSurf"><img src="..\assets\outline_delete_black_24dp.png" @click="deleteSurface()"></v-btn>
            <!-- <v-btn @click="deleteSurface()">Delete</v-btn> -->
        </v-card>
        </div>
        <v-btn color="pink" @click="addRoadSurface()">add additional Road Surface Types</v-btn>
        </v-card>
        <v-card  v-if='graphic===false' v-scroll.self="onScroll" class="overflow-y-auto">
          <v-col v-for="(item,index) in fRdbdSurf" :key="index">
            <v-select :items="surface" label="Road Surface" outlined v-model="item.srfc_type_id" disabled></v-select> 
              <v-row>
                <v-col sm="6">
                 <v-text-field label='A' v-model="item.asset_ln_begin_dfo_ms" disabled></v-text-field>
                </v-col>
                <v-col sm="6">
                 <v-text-field label='B' v-model="item.asset_ln_end_dfo_ms" disabled></v-text-field>
                </v-col>
              </v-row>
          <!-- <v-btn id="currentSurf"><img src="..\assets\outline_delete_black_24dp.png" @click="testFunc()"></v-btn> -->
          </v-col>
        <!-- <v-card v-for="item in roadSurface" :key="item">
          <v-select :items="surface" label="Road Surface" outlined ></v-select>
            <v-row >
               <v-col>
                 <v-text-field label='A' ></v-text-field><v-btn id="editbdfo" icon x-small elevation=0><v-icon>mdi-pencil</v-icon></v-btn>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B'></v-text-field><v-btn id="editedfo" icon x-small elevation=0><v-icon>mdi-pencil</v-icon></v-btn>
               </v-col>
            </v-row>
          <v-btn id="addSurf"><img src="..\assets\outline_delete_black_24dp.png" @click="deleteSurface()"></v-btn>
            
        </v-card>
        <v-btn color="pink" @click="addRoadSurface()">add additional Road Surface Types</v-btn> -->
        </v-card>
        <v-btn
            color="primary"
            @click="e1 = 4">
            Continue
        </v-btn>
        <v-btn @click="cancel()" text>
            Cancel
        </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4" editable>
      Number of Lanes
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card :disabled="graphic ? disabled : ''"><v-select v-model="numLane" :items="lanes" label="Number of Lanes" outlined filled></v-select>
      </v-card>
      <v-btn
        color="primary"
        @click="e1 = 5">
        Continue
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="5" editable>
      Completed?
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-btn
        color="primary">
        Save Edits
      </v-btn>
      <v-btn @click="cancel()" text>
        Cancel
      </v-btn>
    </v-stepper-content>
    <!-- <Map @nm="bool"/> -->
  </v-stepper>
</template>

<script>
//import { criConstants } from '../common/cri_constants';
import { getGraphic, getFeature} from '../components/Map/editFunc'
import {roadInfo} from '../store'
//import Map from '../components/Map/Map.vue'


export default {
    name:"stepper",
    props:{
      received:Boolean
    },
    //components: {Map},
    data () {
      return {
        e1: 1,
        design: ['One Way', 'Two-way', 'Boulevard'],
        surface: ['Paved','Brick','Dirt/Natural','Gravel','Concrete'],
        lanes:[1,2,3,4,5,6],
        counter:0,
        roadSurface:[],
        roadbedName: null,
        roadbedDesign:'',
        roadbedSurface:'',
        beginDFO:null,
        endDFO:null,
        numLane:null,
        editTest: false,
        clickCount: 0,
        graphic: false,
        feature: false,
        clickCountF:0,
        cursor: false,
        bdfo: false,
        edfo: true,
        assetLnInfo: null,
        scrollInvoked:0,
        disabled: false
        //bool: ''
      }
    },
    mounted(){
      document.getElementById('addBtn').onclick = this.clearTable
    },
    watch:{
      //prop transfer data test
      received(){
        console.log(this.received)
      },
      clickCount:{
        handler: async function(){
          let countG = await getGraphic()
          this.feature = false;
          this.graphic = true;

          this.clickCount += countG
          this.roadbedName = roadInfo.getName
          this.roadbedDesign = roadInfo.getDesign
          this.numLane = roadInfo.getLane
          document.getElementById("step").style.width='450px'
        }, 
         immediate: true,
      },
      clickCountF:{
        handler: async function(){
          let countF = await getFeature()
          this.feature = true;
          this.graphic = false;
          this.clickCountF += countF
          this.roadbedName = roadInfo.getName
          this.roadbedDesign = roadInfo.getDesign
          this.numLane = roadInfo.getLane
          document.getElementById("step").style.width='450px'
         
        }, 
         immediate: true,
      },
    },

    methods:{
      onScroll() {
        this.scrollInvoked++
      },
      cancel(){
        document.getElementById("step").style.width = '0px'
        console.log(this.getCount)
      },
        addRoadSurface(){
            let count= this.counter++
            this.roadSurface.push(count)
        },
        clearTable(){
          this.roadbedName = undefined
          this.roadbedDesign = undefined
          this.roadbedSurface = undefined
          this.numLane = undefined
        },
        deleteSurface(index){
          // if(document.getElementById('currentSurf')){
          //   console.log(this.rdbdSurf)
          //   this.assetLnInfo.splice(index,1)
          // }
          if(document.getElementById('addSurf')){
            this.roadSurface.splice(index, 1)
          }
        },
    },
    computed:{
      rdbdSurf(){
        this.clickCount;
        let srfc = roadInfo.getSurface
        console.log(srfc)
        return srfc
      },
      fRdbdSurf(){
        this.clickCountF;
        let Fsrfc = roadInfo.getSurface
        console.log(Fsrfc)
        return Fsrfc
      },
      getCount:{
        get(){
          return roadInfo.getCount
        }
      }
      // testFunc(){
      //   this.assetLnInfo = this.rdbdSurf

      //   return 1
      // }
    }
}
</script>
<style scoped>
.scroller {
  width: auto;
  height: 300px;
  overflow-y: scroll;
  scrollbar-color: grey;
  scrollbar-width: thin;
}

</style>

