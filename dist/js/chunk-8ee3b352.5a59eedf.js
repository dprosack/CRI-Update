(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ee3b352"],{7945:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("a4ee"),i=a("fa8a"),n=a("6a0e"),o=a("59b2"),s=(a("b50f"),a("c120"),a("cea0"),a("d386"));const l=new i["a"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n["a"]{constructor(e){super(e),this.description=null,this.type=null}};Object(r["a"])([Object(o["b"])({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(r["a"])([Object(o["b"])({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(r["a"])([Object(s["a"])("esri.rest.support.GPMessage")],c);const u=c},f579:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Pt}));var r=a("a4ee"),i=a("fa8a"),n=a("59b2"),o=(a("b50f"),a("c120"),a("cea0")),s=a("d386"),l=a("1325"),c=a("f7be"),u=a("2eab"),p=a("ce50"),y=a("b2b2"),d=a("a915"),b=a("e041"),f=a("1219"),m=a("c1da"),h=a("d297"),g=a("fc29"),O=a("3af1"),j=a("5996");let v=class extends g["a"]{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(r["a"])([Object(n["b"])({type:j["a"]})],v.prototype,"outSpatialReference",void 0),Object(r["a"])([Object(n["b"])({type:O["a"]})],v.prototype,"processExtent",void 0),Object(r["a"])([Object(n["b"])({type:j["a"]})],v.prototype,"processSpatialReference",void 0),Object(r["a"])([Object(n["b"])({nonNullable:!0})],v.prototype,"returnFeatureCollection",void 0),Object(r["a"])([Object(n["b"])({nonNullable:!0})],v.prototype,"returnM",void 0),Object(r["a"])([Object(n["b"])({nonNullable:!0})],v.prototype,"returnZ",void 0),v=Object(r["a"])([Object(s["a"])("esri/rest/geoprocessor/GPOptions")],v),v.from=Object(o["m"])(v);const S=v;var w=a("a8d5"),P=a("a1f3"),x=a("6a0e");let D=class extends x["a"]{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(r["a"])([Object(n["b"])({type:O["a"]})],D.prototype,"extent",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"height",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"href",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"opacity",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"rotation",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"scale",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"visible",void 0),Object(r["a"])([Object(n["b"])()],D.prototype,"width",void 0),D=Object(r["a"])([Object(s["a"])("esri.layer.support.MapImage")],D);const I=D;var M=a("bb72");let G=class extends x["a"]{constructor(e){super(e),this.itemId=null,this.url=null}};Object(r["a"])([Object(n["b"])({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],G.prototype,"itemId",void 0),Object(r["a"])([Object(n["b"])({type:String,json:{write:!0}})],G.prototype,"url",void 0),G=Object(r["a"])([Object(s["a"])("esri.rest.support.DataFile")],G);const L=G;var T=a("2edc");const V=new i["a"]({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let J=class extends x["a"]{constructor(e){super(e),this.distance=0,this.units=null}};Object(r["a"])([Object(n["b"])({json:{write:!0}})],J.prototype,"distance",void 0),Object(r["a"])([Object(n["b"])({json:{read:V.read,write:V.write}})],J.prototype,"units",void 0),J=Object(r["a"])([Object(s["a"])("esri/rest/support/LinearUnit")],J);const N=J,R=new i["a"]({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let E=class extends x["a"]{constructor(e){super(e),this.dataType=null,this.value=null}};Object(r["a"])([Object(n["b"])({json:{read:R.read,write:R.write}})],E.prototype,"dataType",void 0),Object(r["a"])([Object(n["b"])()],E.prototype,"value",void 0),E=Object(r["a"])([Object(s["a"])("esri.rest.support.ParameterValue")],E);const F=E;let k=class extends x["a"]{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};Object(r["a"])([Object(n["b"])()],k.prototype,"format",void 0),Object(r["a"])([Object(n["b"])({json:{read:{source:"itemID"},write:{target:"itemID"}}})],k.prototype,"itemId",void 0),Object(r["a"])([Object(n["b"])()],k.prototype,"url",void 0),k=Object(r["a"])([Object(s["a"])("esri/rest/support/RasterData")],k);const A=k;async function C(e,t,a,r,i){const n={},o={},s=[];return U(r,s,n),Object(w["a"])(s).then(s=>{const{outSpatialReference:l,processExtent:c,processSpatialReference:p,returnFeatureCollection:y,returnM:d,returnZ:b}=a,{path:f}=Object(M["c"])(e);for(const e in n){const t=n[e];o[e]=s.slice(t[0],t[1])}const m=l?l.wkid||l:null,h=p?p.wkid||p:null,g="execute"===t?{returnFeatureCollection:y||void 0,returnM:d||void 0,returnZ:b||void 0}:null,O=$({...c?{context:{extent:c,outSR:m,processSR:h}}:{"env:outSR":m,"env:processSR":h},...r,...g,f:"json"},null,o),j={...i,query:O};return Object(u["default"])(`${f}/${t}`,j)})}function U(e,t,a){for(const r in e){const i=e[r];if(i&&"object"==typeof i&&i instanceof T["default"]){const{features:e}=i;a[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}}}function _(e){const t=e.dataType,a=F.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return a;case"GPDate":a.value=new Date(a.value);break;case"GPDataFile":a.value=L.fromJSON(a.value);break;case"GPLinearUnit":a.value=N.fromJSON(a.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;a.value=t?L.fromJSON(a.value):T["default"].fromJSON(a.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;a.value=t?I.fromJSON(t):A.fromJSON(a.value);break}case"GPField":a.value=P["a"].fromJSON(a.value);break;case"GPMultiValue:GPDate":{const e=a.value;a.value=e.map(e=>new Date(e));break}case"GPMultiValue:GPDataFile":a.value=a.value.map(e=>L.fromJSON(e));break;case"GPMultiValue:GPLinearUnit":a.value=a.value.map(e=>N.fromJSON(e));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":a.value=a.value.map(e=>T["default"].fromJSON(e));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":a.value=a.value.map(e=>e?I.fromJSON(e):A.fromJSON(a.value));break;case"GPMultiValue:GPField":a.value=a.value.map(e=>P["a"].fromJSON(e))}return a}function $(e,t,a){for(const r in e){const t=e[r];Array.isArray(t)?e[r]=JSON.stringify(t.map(e=>$({item:e},!0).item)):t instanceof Date&&(e[r]=t.getTime())}return Object(M["b"])(e,t,a)}var q=a("7945");async function z(e,t,a,r){return a=S.from(a||{}),C(e,"execute",a,t,r).then(e=>{const t=e.data.results||[],a=e.data.messages||[];return{results:t.map(_),messages:a.map(e=>q["a"].fromJSON(e))}})}var B,K=a("f4cc");const W=new i["a"]({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let Z=B=class extends x["a"]{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:a}=this,{path:r}=Object(M["c"])(a),i={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),Object(u["default"])(`${r}/jobs/${t}/cancel`,i).then(e=>{const t=B.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=Object(M["c"])(this.sourceUrl),a={...this.requestOptions,...e,query:{f:"json"}},r=`${t}/jobs/${this.jobId}`;return Object(u["default"])(r,a).then(({data:e})=>{const t=B.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}fetchResultData(e,t,a){t=S.from(t||{});const{returnFeatureCollection:r,returnM:i,returnZ:n,outSpatialReference:o}=t,{path:s}=Object(M["c"])(this.sourceUrl),l=$({returnFeatureCollection:r,returnM:i,returnZ:n,outSR:o,returnType:"data",f:"json"},null),c={...this.requestOptions,...a,query:l},p=`${s}/jobs/${this.jobId}/results/${e}`;return Object(u["default"])(p,c).then(e=>_(e.data))}fetchResultImage(e,t,a){const{path:r}=Object(M["c"])(this.sourceUrl),i={...t.toJSON(),f:"json"},n=$(i),o={...this.requestOptions,...a,query:n},s=`${r}/jobs/${this.jobId}/results/${e}`;return Object(u["default"])(s,o).then(e=>_(e.data))}async fetchResultMapImageLayer(){const{path:e}=Object(M["c"])(this.sourceUrl),t=e.indexOf("/GPServer/"),r=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await a.e("chunk-79cde962").then(a.bind(null,"53f8"))).default)({url:r})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:a,statusCallback:r}=e;return new Promise((e,i)=>{Object(K["p"])(a,()=>{this._clearTimer(),i(Object(K["d"])())}),this._clearTimer();const n=setInterval(()=>{this._timer||i(Object(K["d"])()),this.checkJobStatus(this.requestOptions).then(t=>{const{jobStatus:a}=t;switch(this.jobStatus=a,a){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},t);this._timer=n})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(r["a"])([Object(n["b"])()],Z.prototype,"jobId",void 0),Object(r["a"])([Object(n["b"])({json:{read:W.read}})],Z.prototype,"jobStatus",void 0),Object(r["a"])([Object(n["b"])({type:[q["a"]]})],Z.prototype,"messages",void 0),Object(r["a"])([Object(n["b"])()],Z.prototype,"requestOptions",void 0),Object(r["a"])([Object(n["b"])({json:{write:!0}})],Z.prototype,"sourceUrl",void 0),Z=B=Object(r["a"])([Object(s["a"])("esri.rest.support.JobInfo")],Z);const Q=Z;async function Y(e,t,a,r){return a=S.from(a||{}),C(e,"submitJob",a,t,r).then(t=>{const a=Q.fromJSON(t.data);return a.sourceUrl=e,a})}const H=new i["a"]({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),X=(H.fromJSON.bind(H),H.toJSON.bind(H)),ee=new i["a"]({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),te=(ee.fromJSON.bind(ee),ee.toJSON.bind(ee)),ae="simple-marker",re="picture-marker",ie="simple-line",ne="simple-fill",oe="shield-label-symbol",se="text";function le(e,t){const{graphic:a,renderer:r,symbol:i}=t,n=i.type;if(n===se||n===oe||!("visualVariables"in r)||!r.visualVariables)return;const o=r.getVisualVariablesForType("size"),s=r.getVisualVariablesForType("color"),l=r.getVisualVariablesForType("opacity"),c=r.getVisualVariablesForType("rotation"),u=o[0],p=s[0],y=l[0],b=c[0];if(u){const t=n===ae?i.style:null,r=Object(h["getSize"])(u,a,{shape:t});null!=r&&(n===ae?e.size=Object(d["h"])(r):n===re?(e.width=Object(d["h"])(r),e.height=Object(d["h"])(r)):n===ie?e.width=Object(d["h"])(r):e.outline&&(e.outline.width=Object(d["h"])(r)))}if(p){const t=Object(h["getColor"])(p,a);(t&&n===ae||n===ie||n===ne)&&(e.color=t?t.toJSON():void 0)}if(y){const t=Object(h["getOpacity"])(y,a);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}b&&(e.angle=-Object(h["getRotationAngle"])(r,a))}function ce(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function ue(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function pe(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function ye(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function de(e,t=15){const a=e.canvas.width,r=e.canvas.height,i=e.getImageData(0,0,a,r).data;let n,o,s,l,c,u;e:for(o=r;o--;)for(n=a;n--;)if(i[4*(a*o+n)+3]>t){u=o;break e}if(!u)return null;e:for(n=a;n--;)for(o=u+1;o--;)if(i[4*(a*o+n)+3]>t){c=n;break e}e:for(n=0;n<=c;++n)for(o=u+1;o--;)if(i[4*(a*o+n)+3]>t){s=n;break e}e:for(o=0;o<=u;++o)for(n=s;n<=c;++n)if(i[4*(a*o+n)+3]>t){l=o;break e}return{x:s,y:l,width:c-s,height:u-l}}function be(e,t){const a=e.allLayerViews.items;if(t===e.scale)return a.filter(e=>!e.suspended);const r=new Array;for(const i of a)Se(i.parent)&&!r.includes(i.parent)||!i.visible||t&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(t)||r.push(i);return r}function fe(e){return e&&"bing-maps"===e.type}function me(e){return e&&"blendMode"in e&&"effect"in e}function he(e){return e&&"csv"===e.type}function ge(e){return e&&"feature"===e.type}function Oe(e){return e&&"geojson"===e.type}function je(e){return e&&"graphics"===e.type}function ve(e){return e&&"group"===e.type}function Se(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function we(e){return e&&"imagery"===e.type}function Pe(e){return e&&"imagery-tile"===e.type}function xe(e){return e&&"kml"===e.type}function De(e){return e&&"map-image"===e.type}function Ie(e){return e&&"map-notes"===e.type}function Me(e){return e&&"open-street-map"===e.type}function Ge(e){const t=e.layer;if(me(t)){const a=t.blendMode;if((!a||"normal"===a)&&(t.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}function Le(e){return e&&"stream"===e.type}function Te(e){return e&&"tile"===e.type}function Ve(e){return e&&"vector-tile"===e.type}function Je(e){return e&&"web-tile"===e.type}function Ne(e){return e&&"wms"===e.type}function Re(e){return e&&"wmts"===e.type}let Ee=class extends g["a"]{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(r["a"])([Object(n["b"])()],Ee.prototype,"attributionVisible",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"exportOptions",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"forceFeatureAttributes",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"format",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"label",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"layout",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"layoutOptions",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"outScale",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"scalePreserved",void 0),Object(r["a"])([Object(n["b"])()],Ee.prototype,"showLabels",void 0),Ee=Object(r["a"])([Object(s["a"])("esri.rest.support.PrintTemplate")],Ee);const Fe=Ee;var ke=a("8249"),Ae=a("f353");const Ce={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Ue=new i["a"]({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),_e=new i["a"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),$e=new Map;async function qe(e,t,a){const r=Ke(e);let i=$e.get(r);return Promise.resolve().then(()=>i?{data:i.gpMetadata}:(i={gpServerUrl:r,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},Object(u["default"])(r,{query:{f:"json"}}))).then(e=>(i.gpMetadata=e.data,i.cimVersion=i.gpMetadata.cimVersion,i.is11xService=!!i.cimVersion,$e.set(r,i),ze(t,i))).then(r=>{const n=Ot(i);let o;const s=e=>"sync"===n?e.results&&e.results[0]&&e.results[0].value:o.fetchResultData("Output_File",null,a).then(e=>e.value);return"async"===n?Y(e,r,null,a).then(e=>(o=e,e.waitForJobCompletion({interval:t.updateDelay}).then(s))):z(e,r,null,a).then(s)})}async function ze(e,t){t=t||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const a=e.template||new Fe;null==a.showLabels&&(a.showLabels=!0);const r=a.exportOptions;let i;const n=te(a.layout);if(r&&(i={dpi:r.dpi},"map_only"===n.toLowerCase()||""===n)){const e=r.width,t=r.height;i.outputSize=[e,t]}const o=a.layoutOptions;let s;if(o){let e,t;"Miles"===o.scalebarUnit||"Kilometers"===o.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==o.scalebarUnit&&"Feet"!==o.scalebarUnit||(e="Meters",t="Feet"),s={titleText:o.titleText,authorText:o.authorText,copyrightText:o.copyrightText,customTextElements:o.customTextElements,scaleBarOptions:{metricUnit:Ue.toJSON(e),metricLabel:Ce[e],nonMetricUnit:Ue.toJSON(t),nonMetricLabel:Ce[t]}}}let l=null;null!=o&&o.legendLayers&&(l=o.legendLayers.map(e=>{t.legendLayerNameMap[e.layerId]=e.title;const a={id:e.layerId};return e.subLayerIds&&(a.subLayerIds=e.subLayerIds),a}));const c=await Be(e,a,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),a=/[\u0600-\u06FF]/,r=t=>{const r=t.text,i=t.font,n=i&&i.family&&i.family.toLowerCase();r&&i&&("arial"===n||"arial unicode ms"===n)&&(i.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==i.style&&a.test(r)&&(i.family="Arial Unicode MS"))},i=()=>{throw new p["a"]("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach(e=>{var a,n,o;null!=(a=e.featureCollection)&&a.layers?e.featureCollection.layers.forEach(e=>{var a,n,o,s;if(null!=(a=e.layerDefinition)&&null!=(n=a.drawingInfo)&&null!=(o=n.renderer)&&o.symbol){const a=e.layerDefinition.drawingInfo.renderer;"esriTS"===a.symbol.type?r(a.symbol):"CIMSymbolReference"!==a.symbol.type||t.is11xService||i()}null!=(s=e.featureSet)&&s.features&&e.featureSet.features.forEach(e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||i())})}):!t.is11xService&&null!=(n=e.layerDefinition)&&null!=(o=n.drawingInfo)&&o.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()})}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:i,layoutOptions:s||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:t.legendLayers.slice()}}),t.legendLayers.length=0,$e.set(t.gpServerUrl,t);const u={Web_Map_as_JSON:JSON.stringify(c),Format:X(a.format),Layout_Template:n};return e.extraParameters&&Object.assign(u,e.extraParameters),u}async function Be(e,t,a){const r=e.view;let i=r.spatialReference;const n={operationalLayers:await We(r,t,a)};let o=a.ssExtent||e.extent||r.extent;if(i&&i.isWrappable&&(o=o.clone()._normalize(!0),i=o.spatialReference),n.mapOptions={extent:o&&o.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},a.ssExtent=null,r.background&&(n.background=r.background.toJSON()),r.rotation&&(n.mapOptions.rotation=-r.rotation),t.scalePreserved&&(n.mapOptions.scale=t.outScale||r.scale),Object(y["l"])(r.timeExtent)){const e=Object(y["l"])(r.timeExtent.start)?r.timeExtent.start.getTime():null,t=Object(y["l"])(r.timeExtent.end)?r.timeExtent.end.getTime():null;n.mapOptions.time=[e,t]}return n}function Ke(e){let t=e;const a=t.lastIndexOf("/GPServer/");return a>0&&(t=t.slice(0,a+9)),t}async function We(e,t,a){const r=[],i={layerView:null,printTemplate:t,view:e};let n=0;t.scalePreserved&&(n=t.outScale||e.scale);const o=be(e,n);for(const s of o){const e=s.layer;if(!e.loaded||ve(e))continue;let t;i.layerView=s,t=Ge(s)?await st(e,i,a):fe(e)?Ze(e):he(e)?await Qe(e,i,a):ge(e)?await He(e,i,a):Oe(e)?await Xe(e,i,a):je(e)?await et(e,i,a):we(e)?tt(e,a):Pe(e)?at(e,a):xe(e)?await rt(e,i,a):De(e)?it(e,i,a):Ie(e)?await nt(i,a):Me(e)?ot():Le(e)?await lt(e,i,a):Te(e)?ct(e):Ve(e)?await ut(e,i,a):Je(e)?pt(e):Ne(e)?yt(e):Re(e)?dt(e):await st(e,i,a),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=a.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,me(e)&&e.blendMode&&"normal"!==e.blendMode&&(t.blendMode=e.blendMode),r.push(t)))}if(n&&r.forEach(e=>{e.minScale=0,e.maxScale=0}),e.graphics&&e.graphics.length){const i=await Ye(null,e.graphics,t,a);i&&r.push(i)}return r}function Ze(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function Qe(e,t,a){e.legendEnabled&&a.legendLayers.push({id:e.id});const r=t.layerView,i=t.printTemplate;let n;return!a.is11xService||r.filter?Ye(e,await gt(r),i,a):(n={type:"CSV"},e.write(n,{origin:"web-map"}),delete n.popupInfo,delete n.layerType,n.showLabels=i.showLabels&&e.labelsVisible,n)}async function Ye(e,t,a,r){let i;const n=ue(),o=ye(),s=pe(),l=ce(),c=pe();if(c.layerDefinition.name="textLayer",delete c.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?n.layerDefinition.name=o.layerDefinition.name=s.layerDefinition.name=l.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,l.layerDefinition.drawingInfo.renderer=t}if(a.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,p;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(p=u.drawingInfo)?void 0:p.labelingInfo;t&&(i=!0,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,l.layerDefinition.drawingInfo.labelingInfo=t)}}let y;null!=e&&e.renderer||i||(delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const d=null==e?void 0:e.fieldsIndex,b=null==e?void 0:e.renderer;if(d){const t=new Set;i&&await Object(m["g"])(t,e),b&&"function"==typeof b.collectRequiredFields&&await b.collectRequiredFields(t,d),y=Array.from(t);const a=d.fields.map(e=>e.toJSON());n.layerDefinition.fields=a,o.layerDefinition.fields=a,s.layerDefinition.fields=a,l.layerDefinition.fields=a}const h=t&&t.length;let g;for(let m=0;m<h;m++){var O;const i=t[m]||t.getItemAt(m);if(!1===i.visible||!i.geometry)continue;if(g=i.toJSON(),g.hasOwnProperty("popupTemplate")&&delete g.popupTemplate,g.geometry&&g.geometry.z&&delete g.geometry.z,g.symbol&&g.symbol.outline&&"esriCLS"===g.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&g.symbol&&g.symbol.outline&&g.symbol.outline.color&&g.symbol.outline.color[3]&&(g.symbol.outline.color[3]=255);const u=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!g.symbol&&e&&e.renderer&&u&&!r.is11xService){const t=e.renderer,a=await t.getSymbolAsync(i);if(!a)continue;g.symbol=a.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&le(g.symbol,{renderer:t,graphic:i,symbol:a})}if(g.symbol&&(g.symbol.angle||delete g.symbol.angle,jt(g.symbol)?g.symbol=await mt(g.symbol,r):g.symbol.text&&delete g.attributes),(!a||!a.forceFeatureAttributes)&&null!=(O=y)&&O.length){const e={};y.forEach(t=>{g.attributes&&g.attributes.hasOwnProperty(t)&&(e[t]=g.attributes[t])}),g.attributes=e}"polygon"===i.geometry.type?n.featureSet.features.push(g):"polyline"===i.geometry.type?o.featureSet.features.push(g):"point"===i.geometry.type?g.symbol&&g.symbol.text?c.featureSet.features.push(g):s.featureSet.features.push(g):"multipoint"===i.geometry.type?l.featureSet.features.push(g):"extent"===i.geometry.type&&(g.geometry=f["a"].fromExtent(i.geometry).toJSON(),n.featureSet.features.push(g))}const j=[n,o,l,s,c].filter(e=>e.featureSet.features.length>0);for(const f of j){const e=f.featureSet.features.every(e=>e.symbol);!e||a&&a.forceFeatureAttributes||f.featureSet.features.forEach(e=>{delete e.attributes}),e&&delete f.layerDefinition.drawingInfo,f.layerDefinition.drawingInfo&&f.layerDefinition.drawingInfo.renderer&&await ht(f.layerDefinition.drawingInfo.renderer,r)}return j.length?{featureCollection:{layers:j},showLabels:i}:null}async function He(e,t,a){var r,i;let n;const o=e.renderer,s=parseFloat(a.cimVersion);if(e.featureReduction&&(!a.is11xService||s<2.9)||"dot-density"===(null==o?void 0:o.type)&&(!a.is11xService||s<2.6))return st(e,t,a);e.legendEnabled&&a.legendLayers.push({id:e.id});const l=t.layerView,{printTemplate:c,view:u}=t,p=o&&("valueExpression"in o&&o.valueExpression||"hasVisualVariables"in o&&o.hasVisualVariables()),y="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!a.is11xService&&p||l.filter||y||!o||"field"in o&&null!=o.field&&("string"!=typeof o.field||!e.getField(o.field))){const t=await gt(l);n=await Ye(e,t,c,a)}else{var d,b;if(n={id:(f=e.write()).id,title:f.title,opacity:f.opacity,minScale:f.minScale,maxScale:f.maxScale,url:f.url,layerType:f.layerType,customParameters:f.customParameters,layerDefinition:f.layerDefinition},n.showLabels=c.showLabels&&e.labelsVisible,bt(n,e),null!=(d=n.layerDefinition)&&null!=(b=d.drawingInfo)&&b.renderer&&(delete n.layerDefinition.minScale,delete n.layerDefinition.maxScale,await ht(n.layerDefinition.drawingInfo.renderer,a),"visualVariables"in o&&o.visualVariables&&o.visualVariables[0])){const e=o.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(h["getSizeRangeAtScale"])(e,u.scale);n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=Object(Ae["b"])(l);t&&(n.layerDefinition||(n.layerDefinition={}),n.layerDefinition.definitionExpression=n.layerDefinition.definitionExpression?`(${n.layerDefinition.definitionExpression}) AND (${t})`:t)}var f;return n}async function Xe(e,{layerView:t,printTemplate:a},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),Ye(e,await gt(t),a,r)}async function et(e,{printTemplate:t},a){return Ye(e,null,t,a)}function tt(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const a={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(a.bandIds=e.bandIds,a.compressionQuality=e.compressionQuality,a.format=e.format,a.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(a.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(a.renderingRule=e.renderingRule.toJSON()),e.renderer&&(a.layerDefinition=a.layerDefinition||{},a.layerDefinition.drawingInfo=a.layerDefinition.drawingInfo||{},a.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(a.renderingRule=t.toJSON())}return bt(a,e),a}function at(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const a={bandIds:(r=e.write()||{}).bandIds,customParameters:r.customParameters,interpolation:r.interpolation,layerDefinition:r.layerDefinition};var r;return a.layerType="ArcGISImageServiceLayer",bt(a,e),a}async function rt(e,t,a){const r=t.printTemplate;if(a.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(b["D"])(e.url),t}{const i=[],n=t.layerView;n.allVisibleMapImages.forEach((t,a)=>{const r={id:`${e.id}_image${a}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,i.push(r)});const o=[...n.allVisiblePoints.items,...n.allVisiblePolylines.items,...n.allVisiblePolygons.items],s={id:e.id,...await Ye(null,o,r,a)};return i.push(s),i}}function it(e,{view:t},a){let r;const i={id:e.id,subLayerIds:[]};let n=[];const o=t.scale,s=e=>{const t=0===o,a=0===e.minScale||o<=e.minScale,r=0===e.maxScale||o>=e.maxScale;if(e.visible&&(t||a&&r))if(e.sublayers)e.sublayers.forEach(s);else{const t=e.toExportImageJSON(),a={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};n.unshift(a),i.subLayerIds.push(e.id)}};var l;return e.sublayers&&e.sublayers.forEach(s),n.length&&(n=n.map(({id:e,name:t,layerDefinition:a})=>({id:e,name:t,layerDefinition:a})),r={layerType:(l=e.write()).layerType,customParameters:l.customParameters},r.layers=n,r.visibleLayers=e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds,bt(r,e),e.legendEnabled&&a.legendLayers.push(i)),r}async function nt({layerView:e,printTemplate:t},a){const r=[],i=e.layer;if(Object(y["l"])(i.featureCollections))for(const n of i.featureCollections){const e=await Ye(n,n.source,t,a);e&&r.push(...e.featureCollection.layers)}else if(Object(y["l"])(i.sublayers))for(const n of i.sublayers){const e=await Ye(null,n.graphics,t,a);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}function ot(){return{type:"OpenStreetMap"}}async function st(e,{printTemplate:t,view:a},r){const i={type:"image"},n={format:"png",ignoreBackground:!0,layers:[e],rotation:0},o=r.ssExtent||a.extent.clone();let s=96,l=!0,c=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(s=e.dpi),e.width>0&&(l=e.width%2==a.width%2),e.height>0&&(c=e.height%2==a.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===a.scale)&&96===s&&(!l||!c)&&(n.area={x:0,y:0,width:a.width,height:a.height},l||(n.area.width-=1),c||(n.area.height-=1),!r.ssExtent)){const e=a.toMap(Object(d["e"])(n.area.width,n.area.height));o.ymin=e.y,o.xmax=e.x,r.ssExtent=o}i.extent=o.clone()._normalize(!0).toJSON();const u=await a.takeScreenshot(n),{data:p}=Object(b["i"])(u.dataUrl);return i.imageData=p,i}async function lt(e,{layerView:t,printTemplate:a},r){return e.legendEnabled&&r.legendLayers.push({id:e.id}),Ye(e,await gt(t),a,r)}function ct(e){const t={layerType:(a=e.write()).layerType,customParameters:a.customParameters};var a;return bt(t,e),t}async function ut(e,t,a){if(a.is11xService&&e.serviceUrl&&e.styleUrl){const t=ft(e.styleUrl,e.apiKey),r=ft(e.serviceUrl,e.apiKey);if(!t&&!r||"2.1.0"!==a.cimVersion){const a={type:"VectorTileLayer"};return a.styleUrl=Object(b["D"])(e.styleUrl),a.token=t,r!==t&&(a.additionalTokens=[{url:e.serviceUrl,token:r}]),a}}return st(e,t,a)}function pt(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}function yt(e){let t;const a=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&a.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(r),a.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:a,url:Object(b["D"])(e.url),version:e.version}),t}function dt(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(b["D"])(e.url)}}function bt(e,t){t.url&&(e.url=Object(b["D"])(e.url||t.url),e.token=ft(e.url,t.apiKey))}function ft(e,t){var a,r;return Object(ke["a"])(e)&&(t||l["a"].apiKey)?t||l["a"].apiKey:null==(a=c["b"])||null==(r=a.findCredential(e))?void 0:r.token}async function mt(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const a=1024;t.canvas.width=a,t.canvas.height=a;const r=t.canvas.getContext("2d");let i,n;if(e.path){var o;const t=new Path2D(e.path);t.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(t);const s=de(r);if(!s)return null;r.clearRect(0,0,a,a);const l=Object(d["g"])(e.size)/Math.max(s.width,s.height);r.scale(l,l);const c=a/l,u=c/2-s.width/2-s.x,p=c/2-s.height/2-s.y;if(r.translate(u,p),Array.isArray(e.color)&&r.fill(t),null!=(o=e.outline)&&o.width&&Array.isArray(e.outline.color)){const a=e.outline;r.lineWidth=Object(d["g"])(a.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${a.color[0]},${a.color[1]},${a.color[2]},${a.color[3]/255})`,r.stroke(t),s.width+=r.lineWidth,s.height+=r.lineWidth}s.width*=l,s.height*=l;const y=r.getImageData(a/2-s.width/2,a/2-s.height/2,Math.ceil(s.width),Math.ceil(s.height));i=y.width,n=y.height,r.canvas.width=i,r.canvas.height=n,r.putImageData(y,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,a=(await Object(u["default"])(t,{responseType:"image"})).data;i=Object(d["g"])(e.width),n=Object(d["g"])(e.height),r.canvas.width=i,r.canvas.height=n,r.drawImage(a,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(d["h"])(n),width:Object(d["h"])(i),xoffset:e.xoffset,yoffset:e.yoffset}}async function ht(e,t){const a=e.type;if("simple"===a&&jt(e.symbol))e.symbol=await mt(e.symbol,t);else if("uniqueValue"===a||"classBreaks"===a){jt(e.defaultSymbol)&&(e.defaultSymbol=await mt(e.defaultSymbol,t));const r=e["uniqueValue"===a?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)jt(e.symbol)&&(e.symbol=await mt(e.symbol,t))}}async function gt(e){return e.queryFeatures(e.createQuery()).then(e=>e.features)}function Ot(e){return e.gpMetadata&&e.gpMetadata.executionType?_e.fromJSON(e.gpMetadata.executionType):"sync"}function jt(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}var vt=a("9209");const St=new i["a"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"});let wt=class extends vt["a"]{constructor(...e){super(...e),this._gpMetadata=null,this.updateDelay=1e3}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?St.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){return e&&(e.updateDelay=this.updateDelay),qe(this.url,e,{...this.requestOptions,...t})}async _getGpPrintParams(e){const t=Ke(this.url),a=$e.get(t);return ze(e,a)}};Object(r["a"])([Object(n["b"])()],wt.prototype,"_gpMetadata",void 0),Object(r["a"])([Object(n["b"])({readOnly:!0})],wt.prototype,"mode",null),Object(r["a"])([Object(n["b"])()],wt.prototype,"updateDelay",void 0),wt=Object(r["a"])([Object(s["a"])("esri.tasks.PrintTask")],wt);const Pt=wt}}]);
//# sourceMappingURL=chunk-8ee3b352.5a59eedf.js.map