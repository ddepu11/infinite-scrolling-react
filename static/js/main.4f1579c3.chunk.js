(this["webpackJsonpnew-react"]=this["webpackJsonpnew-react"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(8),s=c.n(a),r=c(7),i=c.n(r),o=c(3),u=c(10),l=c(9),j=c(4),d=(c(16),c(0));function b(e){var t=e.likes,c=e.image,n=e.userImg,a=e.updatedAt;return Object(d.jsxs)("div",{className:"img",children:[Object(d.jsx)("img",{src:c,alt:"s"}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("img",{src:n,alt:"s"}),Object(d.jsx)("span",{children:a}),Object(d.jsxs)("p",{children:["Likes: ",t]})]})]})}function p(){return Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"Loading...."})})}var h="?client_id=".concat("nLEPyjNGvZS12M6eUrJ0ozaIpQpCNRH5vXRdssymP0c"),m="https://api.unsplash.com/photos/",O="https://api.unsplash.com/search/photos/";var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),f=r[0],v=r[1],x=Object(n.useState)(0),g=Object(j.a)(x,2),w=g[0],y=g[1],S=Object(n.useState)(""),k=Object(j.a)(S,2),E=k[0],N=k[1];function L(){return(L=Object(l.a)(i.a.mark((function e(){var t,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t="".concat(m).concat(h,"&page=").concat(w),""!==E&&(t="".concat(O).concat(h,"&page=").concat(w,"&query=").concat(E)),e.prev=3,e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:s=e.sent,a(w>0&&""===E?[].concat(Object(o.a)(c),Object(o.a)(s)):w>0&&""!==E?[].concat(Object(o.a)(c),Object(o.a)(s.results)):""!==E?s.results:s),setTimeout((function(){v(!1)}),4e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0),v(!1);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[w]),Object(n.useEffect)((function(){var e=window.addEventListener("scroll",(function(){var e=window.scrollY+window.innerHeight,t=document.body.scrollHeight-3;(window.pageYOffset||document.documentElement.scrollTop)>0&&!1===f&&e>=t&&(y((function(e){return e+1})),v(!0))}));return window.removeEventListener("scroll",e)}),[]);var I=0===c.length?f?Object(d.jsx)(p,{}):Object(d.jsx)("h4",{className:"error",children:"403 Error!! The Request limit to unsplash API is 50 per hour, Please reload after 50 min."}):c.map((function(e,t){var c=e.likes,n=e.urls.small,a=e.user,s=a.updated_at,r={likes:c,image:n,userImg:a.profile_image.medium,updatedAt:new Date(s).toLocaleDateString()};return Object(d.jsx)(b,Object(u.a)({},r),t)}));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("header",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(0)},children:[Object(d.jsx)("input",{type:"text",placeholder:"Search image",value:E,onChange:function(e){N(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})}),Object(d.jsx)("main",{className:"grid",children:I}),f&&Object(d.jsx)(p,{})]})};s.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4f1579c3.chunk.js.map