(this["webpackJsonpnew-react"]=this["webpackJsonpnew-react"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(8),a=c.n(s),r=c(7),o=c.n(r),i=c(3),l=c(10),u=c(9),j=c(4),d=(c(16),c(0));function h(e){var t=e.likes,c=e.image,n=e.userImg,s=e.updatedAt;return Object(d.jsxs)("div",{className:"img",children:[Object(d.jsx)("img",{src:c,alt:"s"}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("img",{src:n,alt:"s"}),Object(d.jsx)("span",{children:s}),Object(d.jsxs)("p",{children:["Likes: ",t]})]})]})}function p(){return Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"Loading...."})})}var b="?client_id=".concat("nLEPyjNGvZS12M6eUrJ0ozaIpQpCNRH5vXRdssymP0c"),m="https://api.unsplash.com/photos/",O="https://api.unsplash.com/search/photos/";var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(j.a)(a,2),f=r[0],g=r[1],v=Object(n.useState)(1),x=Object(j.a)(v,2),w=x[0],y=x[1],S=Object(n.useState)(""),k=Object(j.a)(S,2),E=k[0],N=k[1];function L(){return(L=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),t="".concat(m).concat(b,"&page=").concat(w),""!==E&&(t="".concat(O).concat(b,"&page=").concat(w,"&query=").concat(E)),e.prev=3,e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,console.log(w,E),w>0&&""===E?(s([].concat(Object(i.a)(c),Object(i.a)(a))),console.log("no search")):w>0&&!1!==E?(s([].concat(Object(i.a)(c),Object(i.a)(a.results))),console.log("page > 0 search")):""!==E&&0===w?(s(a.results),console.log("only search")):(s(a),console.log("default")),g(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),g(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[w]),Object(n.useEffect)((function(){var e=window.addEventListener("scroll",(function(){var e=window.scrollY+window.innerHeight,t=document.body.scrollHeight-3;(window.pageYOffset||document.documentElement.scrollTop)>0&&!1===f&&e>=t&&(y((function(e){return e+1})),g(!0))}));return window.removeEventListener("scroll",e)}),[]);var I=0===c.length?f?Object(d.jsx)(p,{}):Object(d.jsx)("h4",{className:"error",children:"403 Error!! The Request limit to unsplash API is 50 per hour, Please reload after 50 min."}):c.map((function(e,t){var c=e.likes,n=e.urls.small,s=e.user,a=s.updated_at,r={likes:c,image:n,userImg:s.profile_image.medium,updatedAt:new Date(a).toLocaleDateString()};return Object(d.jsx)(h,Object(l.a)({},r),t)}));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("header",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Search image",value:E,onChange:function(e){N(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})}),Object(d.jsx)("main",{className:"grid",children:I}),f&&Object(d.jsx)(p,{})]})};a.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7cc8c7ca.chunk.js.map