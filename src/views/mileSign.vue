<template>
    <v-main>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="1100">
      <v-card>
        <v-card-title class="text-h5">
         <v-img><img src="@/assets/txdotLogo.png"></v-img>
        </v-card-title>
        <v-card-text justify="left" v-html="txt"></v-card-text>
        <div id="delegate" class="my-2">
        <v-row no-gutters>
          <v-col md="4" offset-lg="1">
            <v-btn small outlined @click="dialog=false; delegate=true">Delegate Certification</v-btn>
            <v-spacer></v-spacer>
            <a href="https://www.dot.state.tx.us/apps-cg/contact_us/form/dusa-form.htm" class="text-decoration-none; caption">Register for County Road Inventory Account</a>
          </v-col>
        </v-row>
        </div>
        <v-card-actions>
          <v-row>
          <v-col>
          <v-spacer></v-spacer>
          <div class="my-2">
          <v-btn id="disagree"
            dark
            color="red"
            @click="dialog=false; disagree = true; goToMap()">
            Disagree - Start Editing
          </v-btn>
          </div>
          <div class="my-2" id="agree">
          <v-btn 
            dark
            color="blue"
            @click="dialog = false; agree = true;">
            Agree - Certify
          </v-btn>
          </div>
          </v-col>
        </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="disagree"
      persistent
      max-width="1100">
      <v-card v-if="disagree" style="height: 100%; ">
        <v-card-text>
          <p class="font-weight-regular" v-html="disagreeTxt"></p>
        </v-card-text>
        <v-card-actions>
          <v-btn
          block
          elevation="2" 
          @click="disagree = false"
          color="primary">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center"> 
    <v-dialog v-model="agree" persistent max-width="600px">
      <v-card>
        <v-card-text>
            <p class="text-body-1" v-html="agreeTxt"></p>
        </v-card-text>
        <div id="agreeTxtBox">
        <v-text-field
            disabled
            v-model="judgeName"
            required
            outlined
            label="County Judge Name"
        ></v-text-field>
        <v-text-field
            disabled
            v-model="judgeEmail"
            label="County Judge E-mail"
            required
            outlined
        ></v-text-field>
        <v-text-field v-for="item in emailList" :key="item"
            :rules="emailRules"
            label="CC E-mail"
            required
            outlined
            :append-icon="trash"
            @click:append="deleteEmail(index)"
        >{{item}}
        <template v-slot:append >
          <v-icon @click="deleteEmail(index)">mdi-delete</v-icon>
        </template>
        </v-text-field>
        <div>
        <a id="addEmail" x-small @click="addEmail" style="color: blue">Add CC</a>
        </div>
        
        <!-- <v-btn @click ="signature = true">Click to Sign</v-btn>
        <v-card-text v-model="signature" style="font-family:Brush Script MT; font-size:30px" v-show="signature">{{this.judgeName}}</v-card-text> -->
        
        <v-form ref="form" v-model="valid">
        <v-text-field :rules="sigRules" v-model="message" outlined placeholder="Gimme your Autograph"></v-text-field>
        </v-form>
        <p style="font-family:Brush Script MT; font-size:30px">Signature: {{message}}</p>
        <!-- <p class="font-weight-regular; lime darken-2--text">By Clicking submit, an email will be sent<br>to the county judge email address that we have on file</p> -->
        <div id="CCEmail">
          <input type="checkbox" v-model="valid">
          <label> I certify, I am {{judgeName}}</label>
        </div>
        <v-spacer></v-spacer>
        <v-btn outlined color="blue" :disabled="!valid" @click="alert = true; agree=false;">Submit</v-btn>
      </div>
        <v-spacer></v-spacer>
        <v-alert style="left:15px; top:5px" borderd="bottom" type="info" v-html="certiAlert" max-width=550></v-alert>

    </v-card>
    </v-dialog>
    </v-row>
    <v-dialog v-model="alert" persistent>
    <v-alert type="success">
    Certification Complete!
    </v-alert>
    <v-btn @click="goToMap()">Go To Map</v-btn>
    <v-btn>Save and Exit DUSA</v-btn>
    </v-dialog>
    <v-dialog v-model="delegate" persistent max-width="650px">
      <v-card>
        <v-card-text justify="center">
          <p class="text-body-1" v-html="delegateTxt"></p>
        </v-card-text>
        <div>
          <v-card-action >
          <v-text-field
            :counter="30"
            required
            outlined
            label="Name"
            style="width:60%; left:20%"
          ></v-text-field>
          <v-text-field
            :rules="emailRules"
            label="E-mail"
            required
            outlined
            style="width:60%; left:20%"
          ></v-text-field>
          </v-card-action>
        </div>
        <v-divider></v-divider>
        <div v-for="item in emailList" :key="item">
        <v-card-action>
        <v-text-field
            :counter="30"
            required
            outlined
            label="Name"
            style="width:60%; left:20%"
        ></v-text-field>
        <v-text-field
            :rules="emailRules"
            label="E-mail"
            required
            outlined
            style="width:60%; left:20%"
        ></v-text-field>
        <v-divider></v-divider>
      </v-card-action>
      <div style="position:relative; left:40%; bottom: 110px">
        <v-icon @click="deleteEmail(index)">mdi-delete</v-icon>
      </div>
      </div>
      <div style="position:relative; left:0px; bottom: 3px">
        <a x-small @click="addEmail" style="color:blue">Add CC</a>
      </div>
      <v-btn @click="dialog=true; delegate=false">Back to Certification Page</v-btn>
      <v-btn>Send</v-btn>
      <v-btn href="https://www.txdot.gov/">Exit</v-btn>
     </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import {countyInfo} from '../components/Map/editFunc'
import {featLayer,txCounties,view} from '../components/Map/map'
import Query from "@arcgis/core/rest/support/Query"
import {roadInfo} from '../store'
//import MileSignConfirmation from '../components/Map/mileageConfirmation.vue'
export default {
        name:"MileSign",
        //components: {MileSignConfirmation},
        props: ["id"],
        data(){
          return {
            valid: true,
            sigRules: [x => !!x || 'Name is required',
            x => (x && x.length >= 5) || 'Name must be greater than 5 characters'],
            disabled:true,
            checkbox: false,
            sign:false,
            delegate: false,
            alert:false,
            dialog: false,
            txt:'',
            disagree: false,
            agree: false,
            disagreeTxt:'<br><br>Thanks for disagreeing with TxDOT.  Update your county Roads<br><br> Thanks!',
            agreeTxt: '',
            currentMiles: 0,
            date:0,
            sendData: 0,
            signed: false,
            countyNbr: '',
            judgeName: '',
            judgeEmail:'',
            county:'',
            enabled: false,
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            emailList:[],
            counter:0,
            message:'',
            certiAlert:'',
            delegateTxt:''
            //signature: false
          }
        },

        async mounted(){
          
          let readCntyInfo = await countyInfo()
          let getCntyInfoQuery = await readCntyInfo['query']
          this.judgeName = getCntyInfoQuery.features[0].attributes['Judge_Name']
          this.judgeEmail = getCntyInfoQuery.features[0].attributes['Judge_Email']
          this.countyNbr = getCntyInfoQuery.features[0].attributes['County_NBR']
          this.currentMiles = getCntyInfoQuery.features[0].attributes['Total_Mileage']
          this.county = getCntyInfoQuery.features[0].attributes['County_Name']
          this.sendData = parseInt(this.currentMiles)
          this.sendCountyName();
          //this.sendCountyName(Number(getCntyInfoQuery.features[0].attributes['Total_Mileage']))
          roadInfo.getcntyMiles = this.currentMiles
          this.dialog = true
          this.agreeTxt = `<br><br><p align="justify">You are about to certify your county mileage. The current mileage for <b>${this.county}</b> is <b>${this.currentMiles}</b>. Only the county judge can certify the county road inventory.<br><br>
                          If you are not the county judge, please exit this form, or proceed to the DUSA application to start making edits.<br></p><br>`
          this.delegateTxt = `<p align="justify">Use this form to delegate persons to make edits to the ${this.county} County Road Inventory.<br><br> Delegates will receive an email stating that you, ${this.judgeName}, have granted them this authority.<br>
                              You will be copied on all delegation emails. Delegating others to assist with review and edits of your county road inventory does not prevent you from making edits yourself.<br>
                              Furthermore, as county judge, you will have to certify the changes upon their completion and submittal of edits.</p>`
          const todayDate = new Date();
          this.certiAlert = `<p>By clicking submit, you are certifying the mileage for your county and completing the process for ${todayDate.getFullYear()-1}.<br> Edits made in ${todayDate.getFullYear()} after certifying are allowed, but will need to be recertified by the county judge prior to <DATE> in order to be accepted.`
          todayDate.toDateString()
          this.date = todayDate.toDateString().substring(4,15)
          this.txt = `<p align="justify">${todayDate.toDateString().substring(4,15)}</p>
          </br>

          <p align="justify" style=font-family: Arial, Helvetica, sans-serif>Dear ${this.judgeName},</p><br>

          <p align="justify" style=font-family: Arial, Helvetica, sans-serif>The Texas Department of Transportation (TxDOT) is soliciting updates to the county road inventory (CRI) from your county. TxDOT accepts updates from every county, every year. The deadline for the 2021 submission is August 31, 2021.<br><br>
           
          The CRI program received over 6,500 markups in 2020 submitted through the Data Updates & Sharing Application (DUSA) resulting in 449 miles of county roads added. This application greatly enhances reporting accuracy and timeliness for CRI.<br><br>
            
          If your county previously registered to access DUSA, you may proceed with updates for 2021 at any time. However, if your county has not yet registered to access DUSA, please forward the instructions outlined on pages 4 & 5 to your staff or whomever you wish to delegate responsibility for making updates for your county.<br><br>
          
    
          A few things to note about DUSA for 2021: <br><br>
          1)	In May 2021, the valid updates submitted from 2020 were updated in DUSA.<br>
          2)	A ‘reference layer’ is included to show the markups submitted in 2020 that did not<br>
          meet the criteria for a county road, or were not updated for another reason.<br>
          3)	TxDOT is proactively updating city limit boundaries, which subsequently may affect the total county road mileage for your county.<br><br>
            
          In 2020, TxDOT began corresponding with your county via email only and no longer via USPS mail. In addition, we began using DocuSign for the mileage certification. DocuSign is a widely used and accepted tool for securely obtaining electronic signatures.<br><br>

          CERTIFICATION<br>
            
          In September 2021, the certified county-maintained road mileage from 2020 will be submitted to the Texas Department of Motor Vehicles for disbursement of the title and registration fees and to the State Comptroller’s Office for disbursement of the Lateral Road and Bridge funds. Updates made by August 31st, 2021 will be reported in September of 2022.<br><br><br>

          Your 2020 certified mileage is: <b><u>${this.currentMiles}</b></u><br><br>
            
          If the mileage for your county is correct, please sign below.<br><br>

          County Judge	Date<br><br>

          IMPORTANT - If the mileage is incorrect, do not sign this document. Instead, please download a copy of this document using the download button above then follow the instructions on pages 4 & 5 to submit updates.<br><br></p>
      
                                                       <footer style="text-align: center;font-size:12px"><p style=font-family: Arial, Helvetica, sans-serif>OUR VALUES: People • Accountability • Trust • Honesty<br>
                                                              OUR MISSION:  Connecting You With Texas<br>
                                                                  An Equal Opportunity Employer</p></footer>`
        },
         methods:{
           addSignature(){
             return this.signature
           },
           addEmail(){
             let count= this.counter++
             this.emailList.push(count)
           },
           async goToMap(){
            this.$router.push('/map')
            featLayer.definitionExpression =`cnty_nm = '${this.county}'`
            txCounties.definitionExpression=`CNTY_NM='${this.county}'`
            const query = new Query();
            query.where = `CNTY_NM = '${this.county}'`
            query.outFields = [ "*" ]
            query.returnGeometry = true
            let countyQuery = txCounties.queryFeatures(query)
            let returnCountyObj = await countyQuery
            view.goTo({
              target: returnCountyObj.features[0].geometry
            })
          },
          sendCountyName(){
            this.sendData = parseInt(this.currentMiles)
            this.$emit("county-miles", this.sendData)
          },
          deleteEmail(index){
          this.emailList.splice(index, 1)
          },
          // validate(){
          //   this.$refs.form.validate()
          // }

        },
}
</script>
<style scoped>
  #agree{
    position: absolute;
    bottom: 8px;
    right: 4%;
    
  }
  #disagree{
    position: absolute;
    bottom: 55px;
    right: 15px;
  }
  #delegate{
    /* border: 3px solid green; */
    bottom:13px;
    position: absolute;
    width:50%;
  }

  #agreeTxtBox{
    /* border: 3px solid green; */
    left:120px;
    position: relative;
    width:50%;
  }

  #sign{
    /* border: 3px solid green; */
    top: 550px;
    position: absolute;
    width:30%;
    right: 200px
  }
  
  .submitBtn button{
    position: absolute;
    right: 20px;
    bottom: 10px;
    display: block;
  }
  #addEmail{
    right: 315px;
    bottom: 69%;
    position: absolute;
    display: inline;
    width: 20%;
  }
  #addEmail{
    position: relative;
    right: 0%;
    bottom: 9%;
  }
  v-btn{
    cursor: pointer;
  }
</style>
