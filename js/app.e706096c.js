(function(t){function e(e){for(var o,a,u=e[0],s=e[1],c=e[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},3984:function(t,e,n){"use strict";n("a715")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WebAudio",{attrs:{msg:"Synth Vue JS"}})],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"web-audio"},[n("h1",[t._v(t._s(t.msg))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]},t.onChange]}},[n("option",{attrs:{value:"no"}},[t._v("No sound")]),n("option",{attrs:{value:"sine"}},[t._v("Sine")]),n("option",{attrs:{value:"sawtooth"}},[t._v("Sawtooth")])])])},u=[],s={name:"WebAudio",props:{msg:String},data:function(){return{selected:"no"}},methods:{onChange:function(t){console.log(t.target.value),void 0!==this.osc&&(this.osc.stop(),this.osc=void 0),"no"!==t.target.value&&(this.osc=this.audioContext.createOscillator(),this.osc.type=t.target.value,this.osc.connect(this.audioContext.destination),this.osc.start(this.audioContext.currentTime))}},created:function(){this.audioContext=new AudioContext,this.osc=void 0}},c=s,l=(n("3984"),n("2877")),p=Object(l["a"])(c,a,u,!1,null,"653716f6",null),f=p.exports,d={name:"App",components:{WebAudio:f}},v=d,h=(n("034f"),Object(l["a"])(v,r,i,!1,null,null,null)),b=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){},a715:function(t,e,n){}});
//# sourceMappingURL=app.e706096c.js.map