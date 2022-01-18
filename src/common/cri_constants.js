import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import {view, gLayer} from "../components/Map/map"


export const criConstants = {
    addSketch: new SketchViewModel({
        view: view,
        layer: gLayer,
        polylineSymbol: {
          type: "simple-line",
          color: [204, 0, 0],
          width: 2,
          style: "dash"
        }
    }),

    portalUrl: "https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/cri_dev/FeatureServer/0",
    txCounties: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/Texas_County_Boundaries/FeatureServer/0",
    geomTypeRd: "polyline",
    geomTypeCounty: "polygon",
    basemap: "topo-vector",
    zoomLevel: 9,

    fmeurl: 'http://api.fmeserver.com/js/v3/FMEServer.js',
    user: 'dprosack',
    password: '26Fatdogg!88istHundchen',
    countyMiles:0,
    
}

