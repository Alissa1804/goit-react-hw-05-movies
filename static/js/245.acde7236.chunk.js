"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[245],{2639:function(n,t,e){e.d(t,{a:function(){return i}});var r="Loader_loader__+lRPl",a=e(184),i=function(){return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})}},1245:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,i,o,s,c,u,l,d,p=e(5861),f=e(9439),h=e(7757),x=e.n(h),m=e(2791),g=e(7689),v=e(5245),k=e(2639),w=e(536),b=e(168),y=e(6444),j=e(1087),Z=y.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  @media screen and (min-width: 320px) {\n    width: 95%;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 45%;\n  }\n"]))),P=y.ZP.button(a||(a=(0,b.Z)(["\n  align-self: flex-start;\n  background-color: #08aeea;\n  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);\n  border-radius: 5px;\n  font-family: Dosis;\n  min-width: 85px;\n  height: 40px;\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #212121;\n  font-size: 24px;\n  border: 2px solid #212121;\n  cursor: pointer;\n  margin-bottom: 15px;\n  &:hover {\n    color: #fff;\n    border: 2px solid #fff;\n  }\n"]))),C=y.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  gap: 30px;\n  margin-bottom: 30px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),_=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  color: #212121;\n  font-size: 16px;\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n  @media screen and (min-width: 1200px) {\n    font-size: 22px;\n  }\n"]))),R=y.ZP.img(s||(s=(0,b.Z)(["\n  min-width: 100%;\n  border-radius: 5px;\n  @media screen and (min-width: 420px) {\n    min-width: 35%;\n  }\n  @media screen and (min-width: 1200px) {\n    min-width: 50%;\n  }\n"]))),O=y.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),N=(0,y.ZP)(j.rU)(u||(u=(0,b.Z)(["\n  background-color: #08aeea;\n  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);\n  border-radius: 3px;\n  width: 85px;\n  height: 35px;\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #212121;\n  font-size: 24px;\n  border: 2px solid #212121;\n  &:hover {\n    color: #fff;\n    border: 2px solid #fff;\n  }\n"]))),E=y.ZP.ul(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),z=y.ZP.div(d||(d=(0,b.Z)(["\n  width: 60px;\n  height: 60px;\n"]))),M=function(n,t){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},M(n,t)};function W(n){var t=n.className,e=n.counterClockwise,r=n.dashRatio,a=n.pathRadius,i=n.strokeWidth,o=n.style;return(0,m.createElement)("path",{className:t,style:Object.assign({},o,L({pathRadius:a,dashRatio:r,counterClockwise:e})),d:D({pathRadius:a,counterClockwise:e}),strokeWidth:i,fillOpacity:0})}function D(n){var t=n.pathRadius,e=n.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+e+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+e+" 1 1 0,-"+2*t+"\n    "}function L(n){var t=n.counterClockwise,e=n.dashRatio,r=n.pathRadius,a=2*Math.PI*r,i=(1-e)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var S=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return function(n,t){function e(){this.constructor=n}M(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var n=this.props,t=n.value,e=n.minValue,r=n.maxValue;return(Math.min(Math.max(t,e),r)-e)/(r-e)},t.prototype.render=function(){var n=this.props,t=n.circleRatio,e=n.className,r=n.classes,a=n.counterClockwise,i=n.styles,o=n.strokeWidth,s=n.text,c=this.getPathRadius(),u=this.getPathRatio();return(0,m.createElement)("svg",{className:r.root+" "+e,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,m.createElement)("circle",{className:r.background,style:i.background,cx:50,cy:50,r:50}):null,(0,m.createElement)(W,{className:r.trail,counterClockwise:a,dashRatio:t,pathRadius:c,strokeWidth:o,style:i.trail}),(0,m.createElement)(W,{className:r.path,counterClockwise:a,dashRatio:u*t,pathRadius:c,strokeWidth:o,style:i.path}),s?(0,m.createElement)("text",{className:r.text,style:i.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(m.Component);function V(n){var t=n.rotation,e=n.strokeLinecap,r=n.textColor,a=n.textSize,i=n.pathColor,o=n.pathTransition,s=n.pathTransitionDuration,c=n.trailColor,u=n.backgroundColor,l=null==t?void 0:"rotate("+t+"turn)",d=null==t?void 0:"center center";return{root:{},path:F({stroke:i,strokeLinecap:e,transform:l,transformOrigin:d,transition:o,transitionDuration:null==s?void 0:s+"s"}),trail:F({stroke:c,strokeLinecap:e,transform:l,transformOrigin:d}),text:F({fill:r,fontSize:a}),background:F({fill:u})}}function F(n){return Object.keys(n).forEach((function(t){null==n[t]&&delete n[t]})),n}var B=e(184),T=function(){var n,t,e,r,a=function(){var n=(0,m.useState)(null),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,g.UO)().movie_id;return(0,m.useEffect)((function(){var n=function(){var n=(0,p.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Mc)(a);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),e}(),i=(0,g.s0)(),o=(0,g.TH)();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(Z,{children:[" ",a&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(P,{onClick:function(){var n,t;i(null!==(n=null===o||void 0===o||null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"Go back"}),(0,B.jsxs)(C,{children:[a.poster_path&&(0,B.jsx)(R,{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:a.title,width:"200"})||(0,B.jsx)(R,{src:w,alt:a.title,width:"200"}),(0,B.jsxs)(_,{children:[(0,B.jsx)("h2",{children:a.title}),(0,B.jsx)(z,{children:(0,B.jsx)(S,{value:Math.round(10*a.vote_average),text:"".concat(Math.round(10*a.vote_average),"%"),background:!0,backgroundPadding:7,strokeWidth:5,styles:V({backgroundColor:"#252525",textColor:"#fff",pathColor:"#2af598",trailColor:"transparent",textSize:"30px"})})}),a.overview&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h3",{children:"Overview"}),(0,B.jsx)("p",{children:a.overview})]}),a.genres&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h3",{children:"Genres"}),(0,B.jsx)(E,{children:a.genres.map((function(n){var t=n.id,e=n.name;return(0,B.jsx)("li",{children:e},t)}))})]}),(0,B.jsx)("h3",{children:"Additional Information"}),(0,B.jsxs)(O,{children:[(0,B.jsx)(N,{to:"cast",state:{from:null!==(n=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/"},children:"Cast"}),(0,B.jsx)(N,{to:"reviews",state:{from:null!==(e=null===(r=o.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"},children:"Reviews"})]})]})]})]})]}),(0,B.jsx)(m.Suspense,{fallback:(0,B.jsx)(k.a,{}),children:(0,B.jsx)(g.j3,{})})]})}},5245:function(n,t,e){e.d(t,{Hx:function(){return m},Mc:function(){return l},uV:function(){return h},wr:function(){return c},xj:function(){return p}});var r=e(5861),a=e(7757),i=e.n(a),o=e(2388),s="894a5fcb5eb3af426933275e70f0cd83";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("trending/movie/day",{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("search/movie",{params:{api_key:s,query:t,page:e}});case 2:if(0!==(r=n.sent).data.results.length){n.next=7;break}throw Error;case 7:return n.abrupt("return",r.data);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"},536:function(n,t,e){n.exports=e.p+"static/media/no_poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=245.acde7236.chunk.js.map