(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45f8a724"],{"152d":function(t,e,n){"use strict";n("53f2")},"211d":function(t,e,n){},2191:function(t,e,n){"use strict";n("68ff")},"387fb":function(t,e,n){"use strict";var c=n("7a23"),r=Object(c["h"])("source",null,null,-1);function i(t,e,n,i,o,a){return Object(c["r"])(),Object(c["e"])("div",{class:[t.main,t.modificator]},[(Object(c["r"])(),Object(c["e"])("video",{ref:"videoRef",key:t.srcMp4,class:[[t.main,t.modificator],"video__gif"],loop:"",muted:"",playsinline:"",preload:"auto",autoplay:""},[Object(c["h"])("source",{src:t.srcMp4,type:"video/mp4"},null,8,["src"]),r,Object(c["h"])("img",{src:t.srcGif,alt:t.imageAlt},null,8,["src","alt"])],2)),Object(c["y"])(t.$slots,"default")],2)}var o=Object(c["i"])({setup:function(){var t=Object(c["w"])();return Object(c["n"])((function(){t.value.load()})),{videoRef:t}},name:"Video",props:{srcMp4:String,srcGif:String,modificator:String,main:String,imageAlt:String}});n("152d");o.render=i;e["a"]=o},"45fc":function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").some,i=n("a640"),o=n("ae40"),a=i("some"),s=o("some");c({target:"Array",proto:!0,forced:!a||!s},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"53f2":function(t,e,n){},"68ff":function(t,e,n){},a640:function(t,e,n){"use strict";var c=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&c((function(){n.call(null,e||function(){throw 1},1)}))}},bb51:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r={class:"home"},i={class:"home__gif-wrap"};function o(t,e,n,o,a,s){var u=Object(c["z"])("video-gif"),f=Object(c["z"])("Button");return Object(c["r"])(),Object(c["e"])("div",r,[Object(c["h"])("div",i,[Object(c["h"])(u,{main:"video",modificator:"video_main",srcGif:t.gifUrl,srcMp4:t.gifMp4,imageAlt:t.getAlt},null,8,["srcGif","srcMp4","imageAlt"]),Object(c["h"])(f,{onClick:e[1]||(e[1]=function(e){return t.handleUpload()})})])])}n("45fc");var a=Object(c["G"])("data-v-40818024");Object(c["u"])("data-v-40818024");var s={class:"button",type:"button"};Object(c["s"])();var u=a((function(t,e,n,r,i,o){return Object(c["r"])(),Object(c["e"])("button",s,"Загрузить")})),f={name:"Button"};n("2191");f.render=u,f.__scopeId="data-v-40818024";var d=f,l=n("387fb"),b=n("5502"),g=Object(c["i"])({setup:function(){var t=Object(b["b"])(),e=Object(c["c"])((function(){return t.getters.getGif})),n=Object(c["c"])((function(){return t.getters.getGifMp4})),r=Object(c["c"])((function(){var e=t.getters.getAlt?t.getters.getAlt:"User ".concat(t.getters.getUserName," didn't name this GIF");return e}));Object(c["p"])((function(){t.dispatch("fetchGif")}));var i=function(){var e=JSON.parse(localStorage.getItem("data")||"[]");e.some((function(e){return e.id===t.getters.getData.id}))||(e.push(t.getters.getData),localStorage.setItem("data",JSON.stringify(e)),t.dispatch("downloadGif")),t.dispatch("fetchGif")};return{store:t,handleUpload:i,gifUrl:e,gifMp4:n,getAlt:r}},name:"Home",components:{Button:d,"video-gif":l["a"]}});n("dfd4");g.render=o;e["default"]=g},dfd4:function(t,e,n){"use strict";n("211d")}}]);
//# sourceMappingURL=chunk-45f8a724.f31671bf.js.map