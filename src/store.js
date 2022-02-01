export const roadInfo = {
    roadbedName:'test',
    roadbedDesign:'',
    roadbedSurface:{},
    numLane:0,
    beginDfo: 0,
    endDfo: 0,
    addRoad: false,
    cntyName:'',
    cntyNmbr: 0,
    cntyMiles:0,

    get getcntyNmbr(){
       return this.cntyNmbr
    },
    get getcntyMiles(){
      return this.cntyMiles
    },
    get getcntyName(){
       return this.cntyName
    },
    get getaddRoad(){
        return this.addRoad
    },
    get getName(){
       return this.roadbedName
    },
    get getDesign(){
       return this.roadbedDesign
    },
    get getSurface(){
       return this.roadbedSurface
    },
    get getLane(){
       return this.numLane
    },
    get getbeginDfo(){
      return this.beginDfo
   },
   get getendDfo(){
      return this.endDfo
   },

   set getcntyNmbr(nbr){
      this.cntyNmbr = nbr
   },
   set getcntyMiles(mile){
      this.cntyMiles = mile
   },
   set getcntyName(cnty){
      this.cntyName = cnty
   }, 
   set getaddRoad(road){
        this.addRoad = road
    },
    set getName(name){
        this.roadbedName = name;
    },
    set getDesign(design){
       this.roadbedDesign = design
    },
    set getSurface(surface){
       this.roadbedSurface = surface
    },
    set getLane(lane){
       this.numLane = lane
    },
    set getbeginDfo(begin){
      this.beginDfo = begin
    },
    set getendDfo(end){
      this.endDfo = end
    },
  }

  