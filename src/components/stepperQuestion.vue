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
      Road Attribution:
      <small>Fill out this form to complete editing your road.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card><v-text-field v-model="roadbedName" label="Road Name"></v-text-field>
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
      <v-card><v-select v-model="roadbedDesign" :items="design" label="Design" outlined filled></v-select>
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
        <v-card>
          <v-col v-for="(item,index) in assetLnInfo" :key="index">
          <v-select :items="surface" label="Road Surface" outlined v-model="item.srfc_type_id"></v-select> <!-- //v-model="roadbedSurface" -->
          <v-row>
               <v-col sm="6">
                 <v-text-field label='A' v-model="item.asset_ln_begin_dfo_ms"></v-text-field>
               </v-col>
               <v-col sm="6">
                 <v-text-field label='B' v-model="item.asset_ln_end_dfo_ms"></v-text-field>
               </v-col>
          </v-row>
          <v-btn id="currentSurf"><img src="..\assets\outline_delete_black_24dp.png" @click="deleteSurface()"></v-btn>
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
        <v-btn color="pink" @click="addRoadSurface()">add additional Road Surface Types</v-btn>
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
      <v-card><v-select v-model="numLane" :items="lanes" label="Number of Lanes" outlined filled></v-select>
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
  </v-stepper>
</template>

<script>
import { criConstants } from '../common/cri_constants';
import {modifyRoadbed, getGraphic} from '../components/Map/editFunc'
import {roadInfo} from '../store'


export default {
    name:"stepper",
    data () {
      return {
        e1: 1,
        design: ['One Way', 'Two-way', 'Boulevard'],
        surface: ['Paved','Brick','Dirt/Natural','Gravel','Concrete'],
        lanes:[1,2,3,4,5,6],
        counter:0,
        roadSurface:[],
        roadbedName: '',
        roadbedDesign:'',
        roadbedSurface:'',
        beginDFO:null,
        endDFO:null,
        numLane:null,
        editTest: false,
        clickCount: 0,
        cursor: false,
        bdfo: false,
        edfo: true,
        assetLnInfo:[]
      }
    },
    mounted(){
      document.getElementById('addBtn').onclick = this.clearTable
      console.log(roadInfo.getaddRoad)
    },
    watch:{

      roadbedName:{ //roadbedName
        handler: async function(){
          await modifyRoadbed(false)
          console.log(roadInfo.roadbedName)
          console.log(roadInfo.getSurface)
          console.log(roadInfo.getDesign)
          //let design = criConstants.design
          //let surface = criConstants.surface
          //??Maybe set as a getter/setter
          // let getAssetInfo = roadInfo.getSurface
          // console.log(this.assetLnInfo.length)
          // this.assetLnInfo.length = 0
          // for(let x in getAssetInfo){
          //   console.log(getAssetInfo[x])
          //   this.assetLnInfo.push(getAssetInfo[x])
          // }
          this.assetLnInfo = roadInfo.getSurface
          this.roadbedName = roadInfo.getName
          this.roadbedDesign = roadInfo.getDesign
          this.numLane = roadInfo.getLane
          // for(let i in design){
          //   if(design[i]['num'] === modify.features[0].attributes['design']){
          //     this.roadbedDesign = design[i]['name']
          //   }
          // }
          // for(let i in surface){
          //   if(surface[i]['num'] === modify.features[0].attributes['surface']){
          //     this.roadbedSurface = surface[i]['name']
          //     }
          // }
          
          //this.beginDFO = modify.features[0].attributes['begin_dfo']
          //this.endDFO = modify.features[0].attributes['end_dfo']
        },
        immediate: true,
      },
      clickCount:{
        handler: async function(){
          let count = await getGraphic();
          console.log(roadInfo.getName)
          let design = criConstants.design
          let surface = criConstants.surface
          this.roadbedName = roadInfo.getName
          for(let i in design){
            if(design[i]['num'] === roadInfo.getDesign){
              this.roadbedDesign = design[i]['name']
            }
          }
          for(let i in surface){
            if(surface[i]['num'] === roadInfo.getSurface){
              this.roadbedSurface = surface[i]['name']
            }
          }
          this.numLane = roadInfo.getLane
          this.beginDFO = roadInfo.getbeginDfo
          this.endDFO = roadInfo.getendDfo
          this.clickCount += count
          document.getElementById("step").style.width='450px'
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
            //  if(this.endDFO != null){
            //    this.endDFO = this.endDFO/count
            //  }
             
        },
        clearTable(){
          this.roadbedName = undefined
          this.roadbedDesign = undefined
          this.roadbedSurface = undefined
          this.numLane = undefined
          this.beginDFO = undefined
          this.endDFO = undefined
        },
        deleteSurface(index){
          if(document.getElementById('currentSurf')){
            this.assetLnInfo.splice(index,1)
          }
          else if(document.getElementById('addSurf')){
            this.roadSurface.splice(index, 1)
          }
        },
    },
}
</script>
<style scoped>
#editbdfo,#editedfo {
  top: -50px;
  left: 60px;
}

</style>

