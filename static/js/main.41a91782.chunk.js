(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{118:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},235:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),o=(c(118),c(27)),i=c.n(o),l=c(44),u=c(11),d=c(270),j=c(271),f=c(272),h=c(264),b=c(268),v=(c(120),c(121),c(263)),p=c(274),O=c(10),x=c(273),m=c(262),y=c(17),g=c.n(y),C=c(3),w={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},N=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(C.jsx)(x.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:w[t].hex,fillColor:w[t].hex,radius:Math.sqrt(e[t])*w[t].multiplier,children:Object(C.jsx)(m.a,{children:Object(C.jsxs)("div",{className:"info-container",children:[Object(C.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(C.jsx)("div",{className:"info-name",children:e.country}),Object(C.jsxs)("div",{className:"info-confirm",children:["Cases:",g()(e.cases).format("0,0")]}),Object(C.jsxs)("div",{className:"info-recovered",children:["Recovered:",g()(e.recovered).format("0,0")]}),Object(C.jsxs)("div",{className:"info-deaths",children:["Deaths:",g()(e.deaths).format("0,0")]})]})})})}))},S=function(e){return e?"+".concat(g()(e).format("0.0a")):"+0"};var R=function(e){var t=e.countries,c=e.casesType,n=e.center,a=e.zoom;return Object(C.jsx)("div",{className:"map",children:Object(C.jsxs)(v.a,{center:n,zoom:a,children:[Object(C.jsx)(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'$copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),k(t,c)]})})};c(123);var _=function(e){var t=e.countries;return Object(C.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t}),Object(C.jsx)("td",{children:Object(C.jsx)("strong",{children:g()(c).format()})})]})}))})},I=c(25),T=(c(124),c(269));var B=function(e){var t=e.title,c=e.cases,n=e.total,a=e.isRed,s=e.active,r=Object(I.a)(e,["title","cases","total","isRed","active"]);return Object(C.jsx)(h.a,{onClick:r.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(a&&"infoBox--red"),children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(T.a,{className:"infoBox_title",color:"textSecondary",children:t}),Object(C.jsx)("h2",{className:"infoBox_cases ".concat(!a&&"infoBox__cases--green"),children:c}),Object(C.jsxs)(T.a,{color:"textSecondary",children:[n,"Total"]})]})})},D=c(107),E={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return g()(e).format("0a")}}}]}},F=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var M=function(e){var t=e.casesType,c=Object(n.useState)({}),a=Object(u.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=F(e,t);r(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(C.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(C.jsx)(D.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:E})})};c(234);var z=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],v=r[1],p=Object(n.useState)({}),O=Object(u.a)(p,2),x=O[0],m=O[1],y=Object(n.useState)([]),g=Object(u.a)(y,2),w=g[0],k=g[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),T=Object(u.a)(I,2),D=T[0],E=T[1],F=Object(n.useState)(3),z=Object(u.a)(F,2),A=z[0],L=z[1],J=Object(n.useState)([]),P=Object(u.a)(J,2),W=P[0],Y=P[1],q=Object(n.useState)("cases"),K=Object(u.a)(q,2),V=K[0],$=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=N(e);k(c),Y(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var G=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,v(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),m(e),E("worldwide"===c?[e.countryInfo.lat,e.countryInfo.long]:[34.80746,-40.4796]),L(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:"app",children:[Object(C.jsxs)("div",{className:"app_left",children:[Object(C.jsxs)("div",{className:"app_header",children:[Object(C.jsx)("h1",{children:"COVID-19 TRACKER "}),Object(C.jsx)(d.a,{className:"app_dropdown",children:Object(C.jsxs)(j.a,{variant:"outlined",onChange:G,value:o,children:[Object(C.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(C.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(C.jsxs)("div",{className:"app_stats",children:[Object(C.jsx)(B,{isRed:!0,active:"cases"===V,onClick:function(e){return $("cases")},title:"Coronavirus cases",total:S(x.cases),cases:S(x.todayCases)}),Object(C.jsx)(B,{isRed:!1,active:"recovered"===V,onClick:function(e){return $("recovered")},title:"Recovered",total:S(x.recovered),cases:S(x.todayRecovered)}),Object(C.jsx)(B,{isRed:!0,active:"deaths"===V,onClick:function(e){return $("deaths")},title:"Deaths",total:S(x.deaths),cases:S(x.todayDeaths)})]}),Object(C.jsx)(R,{casesType:V,countries:W,center:D,zoom:A})]}),Object(C.jsx)(h.a,{className:"app_right",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)("h3",{children:"Live Content by Country"}),Object(C.jsx)(_,{countries:w}),Object(C.jsxs)("h3",{className:"app_graphTitle",children:["Worldwide new ",V]}),Object(C.jsx)(M,{className:"app_graph",casesType:V})]})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,276)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(z,{})}),document.getElementById("root")),A()}},[[235,1,2]]]);
//# sourceMappingURL=main.41a91782.chunk.js.map