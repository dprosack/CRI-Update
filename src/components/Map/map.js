import { criConstants } from '../../common/cri_constants';

import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Sketch from "@arcgis/core/widgets/Sketch";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
//import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as watchUtils from "@arcgis/core/core/watchUtils";
// import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
//import SnappingOptions from "@arcgis/core/views/interactive/snapping/SnappingOptions";

export const gLayer = new GraphicsLayer();
export const map = new Map({
    basemap: criConstants.basemap,
    layers: [gLayer]
});

export const view = new MapView({
    container: 'viewDiv',
    map: map,
    zoom: 9,
    highlightOptions: {
        color: "orange"
    },
});

view.ui.remove("zoom")

export const featLayer = new FeatureLayer({
    url: criConstants.refernceLayer,
    editingEnabled: true,
    geometryTypeRd: criConstants.geomType,
    //definitionExpression: "CNTY_NM= 'Travis'",
    returnM: true,
    returnZ: true,
    hasM: true,
    visible: false,
  });

export const rdbdSrfcAsst = new FeatureLayer({
    url: criConstants.assetLyrRdbSrf
})
export const rdbdDsgnAsst = new FeatureLayer({
    url: criConstants.assetLyrRdbDsgn
})
export const rdbdNameAsst = new FeatureLayer({
    url: criConstants.assetLyrRdbName
})
export const rdbdLaneAsst = new FeatureLayer({
    url: criConstants.assetLyrRdbLane
})

export const txCounties = new FeatureLayer({
    url: criConstants.txCounties,
    //definitionExpression: "CNTY_NM= 'Travis'"
    //effect: "blur(8px) brightness(1.2) grayscale(0.8)"
})

export const countyOfficialInfo = new FeatureLayer({
    url: 'https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/CRI_County_Info_Test/FeatureServer/0'
})

export const sketch = new Sketch({
    view: view,
    layer: gLayer,
    viewModel: new SketchViewModel({
        view: view,
        layer: gLayer,
        polylineSymbol: {
          type: "simple-line",
          color: [204, 0, 0],
          width: 2,
          style: "dash"
        }
    }),
    // SnappingOptions: new SnappingOptions({
    //     enabled: true,
    //     featureSources: [featLayer]
    // })
});




  //add portal service to map
  watchUtils.whenOnce(view,"ready").then(
    map.addMany([featLayer,txCounties])
  );
  



/**
 * Assigns the container element to the View
 * @param container
*/
export const initialize = (container) => {
    view.container = container;
    view.when()
        .then(() => {
            console.log('Map and View are ready');
        })
        .catch(error => {
            console.warn('An error in creating the map occurred:', error);
        });
};
