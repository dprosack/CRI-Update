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
    geomType: "polyline",
    basemap: "topo-vector",
    zoomLevel: 9
}