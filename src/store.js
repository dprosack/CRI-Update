export const roadInfo = {
    roadbedName:'',
    roadbedDesign:'',
    roadbedSurface:'',
    numLane:0,

    get returnRoadInfo(){
        return this.roadbedName
    },

    set returnRoadInfo(value){
        this.roadbedName = value
    }
  }
  