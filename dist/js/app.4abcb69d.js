(()=>{"use strict";var e={92753:(e,i,n)=>{n(66992),n(88674),n(19601),n(17727);var r=n(36369),a=function(){var e=this,i=e._self._c;return i("div",[i("router-view")],1)},t=[],o=n(1001),p={},s=(0,o.Z)(p,a,t,!1,null,null,null);const u=s.exports;n(41539),n(78783),n(33948);var k=n(72631),l=function(){var e=this,i=e._self._c;return i("div",[i("div",{staticClass:"boxx"},e._l(e.newJsonArr,(function(n,r){return i("div",{key:r,staticClass:"bbb"},[i("div",{staticClass:"ooo"},[e._v(e._s(n.title))]),e._l(n.value,(function(n,r){return i("div",{key:r,staticClass:"xxxx"},e._l(n,(function(n,r){return i("div",{key:r,staticClass:"a"},[e._v(" "+e._s(n.kpi_name)+" ")])})),0)}))],2)})),0)])},_=[];n(57658),n(21249);const c={name:"performance-assessment",data:function(){return{jsonObj:{KEI:[{kpi_name:"工信部移动网络质量满意度",kpi_ranking:"22",kpi_score:"60",kpi_value:"79.52"},{kpi_name:"5G工信部话音质量满意度",kpi_ranking:"15",kpi_score:"100",kpi_value:"86.53"},{kpi_name:"5G工信部上网质量满意度",kpi_ranking:"20",kpi_score:"57",kpi_value:"73.40"},{kpi_name:"CATI话音质量满意度领先值",kpi_ranking:"0",kpi_score:"0",kpi_value:"0.00 "},{kpi_name:"CATI上网质量满意度领先值",kpi_ranking:"0",kpi_score:"0",kpi_value:"0.00 "}],KPI:[{kpi_name:"5G质差小区占比",kpi_ranking:"16",kpi_score:"68",kpi_value:"0.18 "},{kpi_name:"5G基站退服率（含工程）",kpi_ranking:"10",kpi_score:"100",kpi_value:"0.04 "},{kpi_name:"5G室分低零流量占比",kpi_ranking:"27",kpi_score:"74",kpi_value:"8.97 "}],KQI:[{kpi_name:"5G VONR两低一高小区占比",kpi_ranking:"19",kpi_score:"60",kpi_value:"1.67 "},{kpi_name:"5G 2.6G低速率占比",kpi_ranking:"0",kpi_score:"0",kpi_value:"0.00 "},{kpi_name:"5G 700M低速率占比",kpi_ranking:"0",kpi_score:"0",kpi_value:"0.00 "}],干扰类:[{kpi_name:"5G 2.6GHz最强一小时占比",kpi_ranking:"2",kpi_score:"100",kpi_value:"0.44 "},{kpi_name:"5G 700MHz最强一小时占比",kpi_ranking:"21",kpi_score:"50",kpi_value:"28.18 "}],承载结构:[{kpi_name:"5G分流比",kpi_ranking:"6",kpi_score:"56",kpi_value:"37.24 "},{kpi_name:"4G FDD流量占比",kpi_ranking:"19",kpi_score:"52",kpi_value:"38.97 "},{kpi_name:"4G D频段流量占比",kpi_ranking:"21",kpi_score:"69",kpi_value:"18.21 "}],覆盖类:[{kpi_name:"5G驻留时长占比",kpi_ranking:"15",kpi_score:"86",kpi_value:"95.56 "},{kpi_name:"5G全网弱覆盖小区占比",kpi_ranking:"11",kpi_score:"98",kpi_value:"0.17 "},{kpi_name:"4GMDT弱覆盖占比",kpi_ranking:"30",kpi_score:"19",kpi_value:"6.18 "}],载频效率:[{kpi_name:"5G日均流量每载频",kpi_ranking:"25",kpi_score:"67",kpi_value:"37976"}],领先竞对:[{kpi_name:"4G MDT弱覆盖且劣于竞对栅格占比",kpi_ranking:"31",kpi_score:"0",kpi_value:"2.15 "},{kpi_name:"5G 低于竞对网格占比",kpi_ranking:"14",kpi_score:"78",kpi_value:"2.68 "}]},data:[],newJsonArr:[]}},methods:{setData:function(){var e=this;for(var i in this.jsonObj){var n={};n.title=i,n.value=this.jsonObj[i],this.data.push(n)}console.log(this.data);var r=null;this.data.map((function(i){var n=[];i.value.map((function(e,a){a%2===0?(r=[],r.push(e)):(r.push(e),n.push(r)),a%2===0&&a===i.value.length-1&&n.push(r)}));var a={title:i.title,value:n};e.newJsonArr.push(a)})),console.log(this.newJsonArr)}},mounted:function(){this.setData()}},v=c;var d=(0,o.Z)(v,l,_,!1,null,null,null);const f=d.exports;r["default"].use(k.ZP);var m=[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:function(){return n.e(71).then(n.bind(n,6071))}}],h=new k.ZP({mode:"hash",routes:m});const g=h;var b=n(3139),y=n(8499),G=n.n(y);r["default"].prototype.$echarts=b,r["default"].use(G()),r["default"].config.productionTip=!1,new r["default"]({router:g,render:function(e){return e(u)}}).$mount("#app")}},i={};function n(r){var a=i[r];if(void 0!==a)return a.exports;var t=i[r]={exports:{}};return e[r](t,t.exports,n),t.exports}n.m=e,(()=>{var e=[];n.O=(i,r,a,t)=>{if(!r){var o=1/0;for(k=0;k<e.length;k++){for(var[r,a,t]=e[k],p=!0,s=0;s<r.length;s++)(!1&t||o>=t)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(p=!1,t<o&&(o=t));if(p){e.splice(k--,1);var u=a();void 0!==u&&(i=u)}}return i}t=t||0;for(var k=e.length;k>0&&e[k-1][2]>t;k--)e[k]=e[k-1];e[k]=[r,a,t]}})(),(()=>{n.n=e=>{var i=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(i,{a:i}),i}})(),(()=>{n.d=(e,i)=>{for(var r in i)n.o(i,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((i,r)=>(n.f[r](e,i),i)),[]))})(),(()=>{n.u=e=>"js/"+e+".48fef9a5.js"})(),(()=>{n.miniCssF=e=>{}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i)})(),(()=>{var e={},i="doc-test:";n.l=(r,a,t,o)=>{if(e[r])e[r].push(a);else{var p,s;if(void 0!==t)for(var u=document.getElementsByTagName("script"),k=0;k<u.length;k++){var l=u[k];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==i+t){p=l;break}}p||(s=!0,p=document.createElement("script"),p.charset="utf-8",p.timeout=120,n.nc&&p.setAttribute("nonce",n.nc),p.setAttribute("data-webpack",i+t),p.src=r),e[r]=[a];var _=(i,n)=>{p.onerror=p.onload=null,clearTimeout(c);var a=e[r];if(delete e[r],p.parentNode&&p.parentNode.removeChild(p),a&&a.forEach((e=>e(n))),i)return i(n)},c=setTimeout(_.bind(null,void 0,{type:"timeout",target:p}),12e4);p.onerror=_.bind(null,p.onerror),p.onload=_.bind(null,p.onload),s&&document.head.appendChild(p)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e={143:0};n.f.j=(i,r)=>{var a=n.o(e,i)?e[i]:void 0;if(0!==a)if(a)r.push(a[2]);else{var t=new Promise(((n,r)=>a=e[i]=[n,r]));r.push(a[2]=t);var o=n.p+n.u(i),p=new Error,s=r=>{if(n.o(e,i)&&(a=e[i],0!==a&&(e[i]=void 0),a)){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;p.message="Loading chunk "+i+" failed.\n("+t+": "+o+")",p.name="ChunkLoadError",p.type=t,p.request=o,a[1](p)}};n.l(o,s,"chunk-"+i,i)}},n.O.j=i=>0===e[i];var i=(i,r)=>{var a,t,[o,p,s]=r,u=0;if(o.some((i=>0!==e[i]))){for(a in p)n.o(p,a)&&(n.m[a]=p[a]);if(s)var k=s(n)}for(i&&i(r);u<o.length;u++)t=o[u],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(k)},r=self["webpackChunkdoc_test"]=self["webpackChunkdoc_test"]||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(92753)));r=n.O(r)})();
//# sourceMappingURL=app.4abcb69d.js.map