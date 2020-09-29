!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-query")},function(e,t,n){e.exports=n(10)},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-query/hydration")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){e.exports={}},function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r);function c(e,t,n,r,a,c,u){try{var o=e[c](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){c(u,r,a,o,i,"next",e)}function i(e){c(u,r,a,o,i,"throw",e)}o(void 0)}))}}var o=n(0),i=n.n(o),s=n(4),l=n.n(s),p=n(5),f=n.n(p),d=n(1);n(11);var m=function(e){return i.a.createElement("div",null,i.a.createElement("h1",null,"Welcome to HomePage"),i.a.createElement(d.Link,{to:"/users"},"Users"))},h=n(2),v=n(6),y=n.n(v);function x(){return b.apply(this,arguments)}function b(){return(b=u(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=u(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=Object(o.createContext)(null),g=j,O=function(e){var t=Object(o.useContext)(j),n=Object(h.useQueryCache)();t&&(t.done||t.promises.push(e(n)))};var w=function(e){var t=Object(h.useQuery)("users",x),n=t.data,r=t.isLoading;return O((function(e){return e.prefetchQuery("users",x)})),r||!n?i.a.createElement("div",null,"Loading..."):i.a.createElement("ul",null,n.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))};var k=function(e){var t=Object(d.useParams)(),n=parseInt(t.id,10),r=function(e,t){return function(e){return E.apply(this,arguments)}(t)},a=Object(h.useQuery)(["user",n],r),c=a.data,u=a.isLoading;return O((function(e){return e.prefetchQuery(["user",n],r)})),!c||u?i.a.createElement("div",null,"Loading..."):i.a.createElement("div",null,i.a.createElement("h2",null,c.username),i.a.createElement("p",null,"Email: ",c.email),i.a.createElement("p",null,"Website: ",c.website))};var q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.Route,{exact:!0,path:"/"},i.a.createElement(m,null)),i.a.createElement(d.Route,{exact:!0,path:"/users"},i.a.createElement(w,null)),i.a.createElement(d.Route,{path:"/users/:id"},i.a.createElement(k,null)))},P=n(7),S=n.n(P),_=n(8),R=n.n(_),Q=n(9),C=JSON.parse(R.a.readFileSync(S.a.resolve("./build/asset-manifest.json"),"utf8")),L=Object.keys(C.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(C.files[e],'"><\/script>')})).join("");function T(e,t){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(C.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      <script>\n        window.__REACT_QUERY_INITIAL_QUERIES__ = ").concat(JSON.stringify(t).replace(/</g,"\\u003c"),';\n      <\/script>\n      <script src="').concat(C.files["runtime-main.js"],'"><\/script>\n      ').concat(L,'\n      <script src="').concat(C.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var I=f()(),M=function(){var e=u(a.a.mark((function e(t,n,r){var c,u,o,s,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},u={done:!1,promises:[]},o=new h.QueryCache,s=i.a.createElement(h.ReactQueryCacheProvider,{queryCache:o},i.a.createElement(g.Provider,{value:u},i.a.createElement(d.StaticRouter,{location:t.url,context:c},i.a.createElement(q,null)))),l.a.renderToStaticMarkup(s),u.done=!0,e.prev=6,e.next=9,Promise.all(u.promises);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:p=l.a.renderToString(s),f=Object(Q.dehydrate)(o),n.send(T(p,f));case 16:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),A=f.a.static(S.a.resolve("./build"),{index:!1});I.use(A),I.use(M),I.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);