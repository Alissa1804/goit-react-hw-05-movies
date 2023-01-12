"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{2639:function(n,e,r){r.d(e,{a:function(){return i}});var t="Loader_loader__+lRPl",a=r(184),i=function(){return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})}},304:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,i,s,c,o,u=r(5861),p=r(9439),d=r(7757),f=r.n(d),l=r(2791),h=r(5245),x=r(2639),m=r(536),w=r(168),v=r(6444),Z=r(1087),y=v.ZP.h2(t||(t=(0,w.Z)(["\n  color: #212121;\n  @media screen and (min-width: 320px) {\n    font-size: 25px;\n  }\n  @media screen and (min-width: 1200px) {\n    font-size: 28px;\n  }\n"]))),g=v.ZP.ul(a||(a=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 90vw;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 320px) {\n    gap: 10px;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 20px;\n  }\n"]))),b=(0,v.ZP)(Z.rU)(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  display: block;\n  color: #fff;\n  @media screen and (min-width: 320px) {\n    font-size: 12px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),k=v.ZP.h3(s||(s=(0,w.Z)(["\n  padding: 8px;\n  color: #2af598;\n"]))),j=v.ZP.li(c||(c=(0,w.Z)(["\n  display: flex;\n  background-color: #212121;\n  padding-bottom: 5px;\n  border-radius: 5px;\n  border: 2px solid #2af598;\n  overflow: hidden;\n  object-fit: cover;\n  @media screen and (min-width: 320px) {\n    width: 45%;\n  }\n  @media screen and (min-width: 768px) {\n    width: 18%;\n  }\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),_=v.ZP.img(o||(o=(0,w.Z)(["\n  width: 100%;\n  flex-grow: 1;\n"]))),P=r(184),z=function(){var n=(0,l.useState)([]),e=(0,p.Z)(n,2),r=e[0],t=e[1],a=(0,l.useState)(!1),i=(0,p.Z)(a,2),s=i[0],c=i[1];return(0,l.useEffect)((function(){var n=function(){var n=(0,u.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,h.wr)();case 4:e=n.sent,t(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,P.jsxs)(P.Fragment,{children:[s&&(0,P.jsx)(x.a,{}),!s&&r&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y,{children:"Trending Movies Today"}),(0,P.jsx)(g,{children:r.map((function(n){var e=n.title,r=n.id,t=n.poster_path;return(0,P.jsx)(j,{children:(0,P.jsxs)(b,{to:"/movies/".concat(r.toString()),children:[t&&(0,P.jsx)(_,{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:e,width:"200"})||(0,P.jsx)(_,{src:m,alt:e,width:"200"}),(0,P.jsx)(k,{children:e})]})},r)}))})]})]})}},5245:function(n,e,r){r.d(e,{Hx:function(){return m},Mc:function(){return p},uV:function(){return h},wr:function(){return o},xj:function(){return f}});var t=r(5861),a=r(7757),i=r.n(a),s=r(2388),c="894a5fcb5eb3af426933275e70f0cd83";function o(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/movie/day",{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("search/movie",{params:{api_key:c,query:e,page:r}});case 2:if(0!==(t=n.sent).data.results.length){n.next=7;break}throw Error;case 7:return n.abrupt("return",t.data);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"},536:function(n,e,r){n.exports=r.p+"static/media/no_poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=304.c7d5d898.chunk.js.map