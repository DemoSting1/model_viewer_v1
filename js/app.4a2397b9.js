(function(){"use strict";var e={3:function(e,t,n){var o=n(5130),i=n(6768);function l(e,t,n,o,l,r){const a=(0,i.g2)("ModelViewerContainer");return(0,i.uX)(),(0,i.Wv)(a)}const r={class:"common-layout"};function a(e,t,n,o,l,a){const c=(0,i.g2)("ModelViewerHeader"),d=(0,i.g2)("el-header"),s=(0,i.g2)("ThreeModelViewer"),u=(0,i.g2)("el-main"),m=(0,i.g2)("el-container");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.bF)(d,null,{default:(0,i.k6)((()=>[(0,i.bF)(c)])),_:1}),(0,i.bF)(m,null,{default:(0,i.k6)((()=>[(0,i.bF)(u,null,{default:(0,i.k6)((()=>[(0,i.bF)(s)])),_:1})])),_:1})])),_:1})])}const c=e=>((0,i.Qi)("data-v-29b399ec"),e=e(),(0,i.jt)(),e),d={class:"header-container"},s={id:"header-icon"},u={id:"model-control-button-list"},m=c((()=>(0,i.Lk)("div",{class:"split-line"},"|",-1))),h=c((()=>(0,i.Lk)("div",{class:"split-line"},"|",-1))),p=c((()=>(0,i.Lk)("div",{class:"split-line"},"|",-1))),f=["src"],g={class:"model-color-select-container"},w=c((()=>(0,i.Lk)("div",{id:"model-control-button-list-1"},[(0,i.Lk)("img",{class:"model-control-button",src:"/images/问题.png",style:{width:"20px",height:"20px"}})],-1)));function v(e,t,n,o,l,r){const a=(0,i.g2)("el-avatar"),c=(0,i.g2)("el-option"),v=(0,i.g2)("el-option-group"),b=(0,i.g2)("el-select"),k=(0,i.g2)("ColorButtonList");return(0,i.uX)(),(0,i.CE)("div",d,[(0,i.Lk)("div",s,[(0,i.bF)(a,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),(0,i.Lk)("div",null,[(0,i.bF)(b,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),placeholder:"Select",style:{width:"240px"}},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.options,(e=>((0,i.uX)(),(0,i.Wv)(v,{key:e.label,label:e.label},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.models,(e=>((0,i.uX)(),(0,i.Wv)(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),(0,i.Lk)("div",u,[(0,i.Lk)("img",{class:"model-control-button",src:"/images/放大.png",onClick:t[1]||(t[1]=(...e)=>r.handleZoomInClick&&r.handleZoomInClick(...e)),style:{width:"20px",height:"20px"}}),(0,i.Lk)("img",{class:"model-control-button",src:"/images/缩小.png",onClick:t[2]||(t[2]=(...e)=>r.handleZoomOutClick&&r.handleZoomOutClick(...e)),style:{width:"20px",height:"20px"}}),m,(0,i.Lk)("img",{class:"model-control-button",src:"/images/侧视图.png",onClick:t[3]||(t[3]=(...e)=>r.modelSideViewClick&&r.modelSideViewClick(...e)),style:{width:"20px",height:"20px"}}),(0,i.Lk)("img",{class:"model-control-button",src:"/images/俯视图.png",onClick:t[4]||(t[4]=(...e)=>r.modelTopViewClick&&r.modelTopViewClick(...e)),style:{width:"20px",height:"20px"}}),(0,i.Lk)("img",{class:"model-control-button",src:"/images/正视图.png",onClick:t[5]||(t[5]=(...e)=>r.modelFrontViewClick&&r.modelFrontViewClick(...e)),style:{width:"20px",height:"20px"}}),(0,i.Lk)("img",{class:"model-control-button",src:"/images/轴测图.png",onClick:t[6]||(t[6]=(...e)=>r.modelDefaultViewClick&&r.modelDefaultViewClick(...e)),style:{width:"20px",height:"20px"}}),h,(0,i.Lk)("img",{class:"model-control-button",src:"/images/显示.png",onClick:t[7]||(t[7]=(...e)=>r.handleShowModelClick&&r.handleShowModelClick(...e)),style:{width:"20px",height:"20px"}}),(0,i.Lk)("img",{class:"model-control-button",src:"/images/隐藏.png",onClick:t[8]||(t[8]=(...e)=>r.handleHideModelClick&&r.handleHideModelClick(...e)),style:{width:"20px",height:"20px"}}),p,(0,i.Lk)("img",{class:"model-control-button",src:l.modelRectSwitchOn?l.modelRectSwitchOffImgUrl:l.modelRectSwitchOnImgUrl,onClick:t[9]||(t[9]=(...e)=>r.switchModelSizeRectClick&&r.switchModelSizeRectClick(...e)),style:{width:"20px",height:"20px"}},null,8,f),(0,i.Lk)("div",g,[(0,i.Lk)("img",{class:"model-color-button",src:"/images/颜色.png",onClick:t[10]||(t[10]=(...e)=>r.switchModelSizeRectClick&&r.switchModelSizeRectClick(...e)),style:{width:"24px",height:"24px"}}),(0,i.bF)(k)])]),w])}var b=n(595);const k=(0,b.A)();var C=k,y=n(8626),M=n.n(y);const S={RED:"c91a09",GREEN:"00ff00"},E={label:"Toy models",models:[{value:"models/car.ldr_Packed.mpd",label:"小汽车"},{value:"models/1621-1-LunarMPVVehicle.mpd_Packed.mpd",label:"月球车"},{value:"models/889-1-RadarTruck.mpd_Packed.mpd",label:"雷达卡车"},{value:"models/4838-1-MiniVehicles.mpd_Packed.mpd",label:"拖车"},{value:"models/4915-1-MiniConstruction.mpd_Packed.mpd",label:"推土机"},{value:"models/4918-1-MiniFlyers.mpd_Packed.mpd",label:"直升机"},{value:"models/30023-1-Lighthouse.ldr_Packed.mpd",label:"灯塔",yStep:-100},{value:"models/30051-1-X-wingFighter-Mini.mpd_Packed.mpd",label:"X-Wing mini"},{value:"models/30054-1-AT-ST-Mini.mpd_Packed.mpd",label:"AT-ST mini",yStep:40},{value:"models/4494-1-Imperial Shuttle-Mini.mpd_Packed.mpd",label:"公共汽车"},{value:"models/6965-1-TIEIntercep_4h4MXk5.mpd_Packed.mpd",label:"拦截机",yStep:50},{value:"models/6966-1-JediStarfighter-Mini.mpd_Packed.mpd",label:"明星战斗机"}]},x={class:"button-list-container"},O=["src"];function V(e,t,n,o,l,r){return(0,i.uX)(),(0,i.CE)("div",x,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.buttonList,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"button-container",key:t},[(0,i.Lk)("img",{class:"button-icon",src:e},null,8,O)])))),128))])}var F={name:"ColorButtonList",data(){return{buttonList:S}},methods:{selectColor(e){this.$emit("colorSelected",e)}}},_=n(1241);const j=(0,_.A)(F,[["render",V]]);var L=j,R={name:"ModelViewerHeader",components:{ColorButtonList:L},data(){return{value:"",modelRectSwitchOn:!1,modelRectSwitchOnImgUrl:"/images/矩形外壳.png",modelRectSwitchOffImgUrl:"/images/不显示矩形外壳.png",options:[E]}},watch:{value:function(e,t){M().debounce((function(){console.log("value changed from "+t+" to "+e),C.emit("modelSelectedChangedEvent",e)}),500)()}},methods:{handleZoomInClick:M().debounce((function(){C.emit("modelZoomInEvent")}),500),handleZoomOutClick:M().debounce((function(){C.emit("modelZoomOutEvent")}),500),handleShowModelClick:M().debounce((function(){C.emit("showModelEvent")}),500),handleHideModelClick:M().debounce((function(){C.emit("hideModelEvent")}),500),switchModelSizeRectClick:M().debounce((function(){this.modelRectSwitchOn?(C.emit("hideModelSizeRectEvent"),this.modelRectSwitchOn=!this.modelRectSwitchOn):(C.emit("showModelSizeRectEvent"),this.modelRectSwitchOn=!this.modelRectSwitchOn)}),500),modelFrontViewClick:M().debounce((function(){C.emit("modelFrontViewEvent")}),500),modelSideViewClick:M().debounce((function(){C.emit("modelSideViewEvent")}),500),modelTopViewClick:M().debounce((function(){C.emit("modelTopViewEvent")}),500),modelDefaultViewClick:M().debounce((function(){C.emit("modelDefaultViewEvent")}),500)}};const P=(0,_.A)(R,[["render",v],["__scopeId","data-v-29b399ec"]]);var T=P;const I={class:"canvas-container"},z={ref:"container"};function D(e,t,n,o,l,r){return(0,i.uX)(),(0,i.CE)("div",I,[(0,i.Lk)("div",z,null,512)])}var A=n(8776),H=n(4692),X=n(427),U=n(1353),W=n(2661),Z=n(9701),N=n(1901),B=n(2951);function q(e,t=150){e.onMouseWheel(new WheelEvent("wheel",{deltaY:-t}))}function Q(e,t=150){e.onMouseWheel(new WheelEvent("wheel",{deltaY:t}))}function Y(e,t){const n=new B.N(e,t);return n.enableDamping=!0,n.update(),n}let K=0,$=null;function G(){const e=new A.ubm(45,window.innerWidth/window.innerHeight,.1,2500);return e}function J(e){e.position.copy($)}function ee(e,t){t.children.forEach((t=>{if(t.isObject3D){$=new A.Pq0;var n=(new A.NRn).setFromObject(t);n.getCenter($),K=n.getSize(new A.Pq0).length(),J(e),e.position.x-=K/1,e.position.y+=K/3,e.position.z+=1*K,e.lookAt($)}}))}function te(e){J(e),e.position.x=0,e.position.y=0,e.position.z+=1*K}function ne(e){J(e),e.position.x-=K,e.position.z=0,e.position.y=0}function oe(e){J(e),e.position.x=0,e.position.z=0,e.position.y+=K}function ie(e){J(e),e.position.x-=K/1,e.position.y+=K/3,e.position.z+=1*K}function le(e){e.children.forEach((t=>{t.isObject3D&&e.remove(t)}))}function re(e){e.traverse((function(t){t instanceof A.eaF&&(e.visible=!1)}))}function ae(e){e.traverse((function(t){t instanceof A.eaF&&(e.visible=!0)}))}let ce,de,se,ue,me=null;function he(e){e.children.forEach((t=>{if(t.isObject3D){const n=(new A.NRn).setFromObject(t),o=new A.Pq0;n.getSize(o);const i=o.x,l=o.y,r=o.z,a=new A.Pq0;n.getCenter(a);const c=a.clone(),d=new A.Gu$(.1,8,8),s=new A.V9B({color:16711680}),u=new A.eaF(d,s);u.position.copy(c),e.add(u);const m=new A.V9B({color:0,transparent:!0,opacity:.1,depthTest:!0,depthWrite:!1}),h=new A.iNn(i,l,r);null==me&&(me=new A.eaF(h,m),me.position.copy(c),e.add(me))}}))}function pe(e){me&&(e.remove(me),me.geometry.dispose(),me.material.dispose(),me=null)}var fe={name:"ThreeModelViewer",data(){return{renderer:null,modelSize:new A.Pq0(0,0,0),modelUrl:"/"+E.models[0].value}},components:{},mounted(){this.init(),this.loadModel(this.modelUrl),this.animate(),C.on("modelZoomInEvent",(()=>{se&&q(se)})),C.on("modelZoomOutEvent",(()=>{se&&Q(se)})),C.on("showModelEvent",(()=>{ae(ce)})),C.on("hideModelEvent",(()=>{re(ce)})),C.on("showModelSizeRectEvent",(()=>{he(ce)})),C.on("hideModelSizeRectEvent",(()=>{pe(ce)})),C.on("modelSelectedChangedEvent",(e=>{this.modelUrl=e,this.loadModel(this.modelUrl)})),C.on("modelFrontViewEvent",(()=>{te(this.camera)})),C.on("modelSideViewEvent",(()=>{ne(this.camera)})),C.on("modelTopViewEvent",(()=>{oe(this.camera)})),C.on("modelDefaultViewEvent",(()=>{ie(this.camera)}))},watch(){},methods:{init(){ce=new A.Z58,ce.background=new A.Q1f("transparent"),this.renderer=new A.JeP({antialias:!0,depth:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=A.FV,this.$refs.container.appendChild(this.renderer.domElement);const e=new W.l(this.renderer);de=new Z.B(this.renderer),ce.environment=de.fromScene(e).texture,ue=document.createElement("div"),ue.innerText="Loading...",ue.style.fontSize="3em",ue.style.color="#888",ue.style.display="block",ue.style.position="absolute",ue.style.top="50%",ue.style.width="100%",ue.style.textAlign="center",this.camera=G(),se=Y(this.camera,this.renderer.domElement)},loadModel(e,t="mpd"){let n;switch(t){case"obj":n=new X.L;break;case"mpd":n=new H.S;break;case"gltf":n=new U.B;break;default:return void console.error("Unsupported model type")}n.load(e,(t=>{if(t instanceof A.B69){t.rotation.set(-Math.PI,0,0);const n=E.models.find((t=>t.value===e.slice(0)));console.log("selectedObject",e.slice(1)),n&&n.yStep&&(t.position.y+=n.yStep),t.traverse((function(e){e.castShadow=!0,e.material&&(e.material.depthTest=!0)})),le(ce),ce.add(t),ee(this.camera,ce)}else console.error("Error: loaded object is not an instance of THREE.Object3D")}),void 0,(e=>{console.error("Error loading model",e)}))},cleanVertexData(e){e.traverse((function(e){if(e instanceof A.eaF){const t=e.geometry.attributes.position.array;for(let e=0;e<t.length;e++)isNaN(t[e])&&(t[e]=0)}}))},onMouseClick(e){const t=new A.I9Y(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1),n=new A.tBo;n.setFromCamera(t,this.camera);const o=n.intersectObjects(ce.children,!0);if(o.length>0){const e=o[0].object;this.highlightObject(e)}},highlightObject(e){this.restoreHighlightedObject();const t=e.material,n=new A._4j({color:255});e.material=n,e.userData.originalMaterial=t,console.log(this.getIntroText(e.userData))},restoreHighlightedObject(){ce.traverse((e=>{e.userData.originalMaterial&&(e.material=e.userData.originalMaterial,delete e.userData.originalMaterial)}))},getIntroText(e){return e.originalMaterial&&e.originalMaterial.name?e.originalMaterial.name:"No description available."},changeModelColor(e){let t=new A.Q1f("#"+e),n=!1,o=this.findMostUsedColor(ce);this.restoreHighlightedObject(),ce.traverse((i=>{if(i instanceof A.eaF){let l=i.material.color.getHexString();if(console.log({maxUsedColor:o,objectHexColor:l,hexColor:e,_color:t}),i.userData.originalMaterial)l==e&&(n=!0);else if(l==o){i.userData.originalMaterial=i.material.clone();const e=i.material.clone();e.color=t,i.material=e}}})),n&&this.restoreHighlightedObject()},handleColorSelected(e){this.changeModelColor(e)},findMostUsedColor(e){const t={};e.traverse((e=>{if(e instanceof A.eaF){const n=e.material,o=n.color.getHexString();o in t?t[o]++:t[o]=1}}));let n=null,o=0;for(const i in t)t[i]>o&&(n=i,o=t[i]);return n},explodeModelAlongCenterLines(e){const t=new A.Pq0,n=(new A.NRn).setFromObject(e);n.getCenter(t),e.traverse((e=>{if("Mesh"===e.type){let n=(new A.NRn).setFromObject(e),o=n.getCenter(new A.Pq0),i=t.clone().sub(o).normalize(),l=5,r=100,a=o.clone().add(i.multiplyScalar(r));new N.Ay.Tween(e.position).to(a,1e3*l).easing(N.Ay.Easing.Quadratic.In).start()}}))},animate(){requestAnimationFrame(this.animate),se.update(),N.Ay.update(),this.renderer.render(ce,this.camera)}},beforeUnmount(){cancelAnimationFrame(this.animate)}};const ge=(0,_.A)(fe,[["render",D]]);var we=ge,ve={name:"ModelViewerContainer",components:{ModelViewerHeader:T,ThreeModelViewer:we}};const be=(0,_.A)(ve,[["render",a],["__scopeId","data-v-fe9eb9cc"]]);var ke=be,Ce={name:"App",components:{ModelViewerContainer:ke}};const ye=(0,_.A)(Ce,[["render",l]]);var Me=ye,Se=n(371),Ee=(n(4188),n(7477));const xe=(0,o.Ef)(Me);xe.use(Se.A),xe.mount("#app");for(const[Oe,Ve]of Object.entries(Ee))xe.component(Oe,Ve)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var r=1/0;for(s=0;s<e.length;s++){o=e[s][0],i=e[s][1],l=e[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,l<r&&(r=l));if(a){e.splice(s--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,r=o[0],a=o[1],c=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var s=c(n)}for(t&&t(o);d<r.length;d++)l=r[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},o=self["webpackChunkmodel_viewer_v1"]=self["webpackChunkmodel_viewer_v1"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3)}));o=n.O(o)})();
//# sourceMappingURL=app.4a2397b9.js.map