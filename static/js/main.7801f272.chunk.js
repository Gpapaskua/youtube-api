(this["webpackJsonplivecode-app"]=this["webpackJsonplivecode-app"]||[]).push([[0],{27:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(19),i=c.n(a),r=(c(27),c(2)),l=c(5),j=c(1),d=function(){return Object(j.jsx)("div",{className:"min-vh-100 d-flex justify-content-center align-items-center",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("span",{children:"L"}),Object(j.jsx)("span",{children:"O"}),Object(j.jsx)("span",{children:"A"}),Object(j.jsx)("span",{children:"D"}),Object(j.jsx)("span",{children:"I"}),Object(j.jsx)("span",{children:"N"}),Object(j.jsx)("span",{children:"G"})]})})},o=c(10),b=c.n(o),u=c(20),h=c(21),x=c.n(h).a.create({baseURL:"".concat("https://www.googleapis.com/youtube/v3/search")}),O=function(e){var t=e.setData,c=e.setLoading,s=Object(n.useState)(""),a=Object(l.a)(s,2),i=a[0],r=a[1],d=Object(n.useCallback)(Object(u.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,x.get("?part=snippet&maxResults=10&q=".concat(i,"&key=").concat("AIzaSyB8wAP6By3MjADdPr95zr4wqmHWd73tUrE"));case 4:n=e.sent,t(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),[i,t,c]);return Object(j.jsx)("div",{className:"w-75 min-vh-100 d-flex mx-auto align-items-center",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),d()},className:"w-100",children:Object(j.jsx)("div",{className:"wrap",children:Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"searchTerm",type:"search",id:"search",value:i,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"searchButton",children:Object(j.jsx)("i",{className:"fa fa-search"})})]})})})})},m=function(e){var t=e.item;return Object(j.jsxs)("div",{className:"col-xs-12 col-sm-4 d-flex flex-strech mb-5 video",children:[Object(j.jsx)("div",{className:"detail",children:Object(j.jsx)("a",{rel:"external",href:"https://www.youtube.com/watch?v=".concat(t.id.videoId||""),target:"_new",className:"btn btn-info",children:"Go to video"})}),Object(j.jsxs)("div",{className:"card border-1",children:[Object(j.jsx)("img",{src:t.snippet.thumbnails.high.url,alt:"thumbnail",className:"rounded"}),Object(j.jsxs)("div",{className:"card-content px-3 pt-2",children:[Object(j.jsx)("h4",{className:"card-title",children:t.snippet.title}),Object(j.jsx)("p",{children:t.snippet.description})]})]})]})},p=function(e){var t=e.data;return Object(n.useEffect)((function(){document.body.classList.toggle("darkmode")}),[]),Object(j.jsx)("div",{className:"container pt-5",children:Object(j.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.items.map((function(e,t){return Object(j.jsx)(m,{item:e},t)}))})})},v=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(l.a)(a,2),r=i[0],o=i[1];return r?Object(j.jsx)(d,{}):Object(j.jsxs)("div",{className:"container-fluid",children:[!c&&Object(j.jsx)(O,{setData:s,setLoading:o,loading:r}),c&&Object(j.jsx)(p,{data:c})]})},f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(r.c,{children:Object(j.jsx)(r.a,{path:"/",element:Object(j.jsx)(v,{})})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},N=c(22);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N.a,{children:Object(j.jsx)(f,{})})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.7801f272.chunk.js.map