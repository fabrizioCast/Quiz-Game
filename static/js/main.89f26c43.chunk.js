(this["webpackJsonpcountry-quiz"]=this["webpackJsonpcountry-quiz"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},45:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(13),n=c.n(i),r=(c(36),c(37),c(9)),l=c(2),u=c(31),j=(c(38),c(8)),o=c(1),d=Object(s.createContext)(),b=function(e){var t=e.children,c=Object(s.useState)(!1),a=Object(j.a)(c,2),i=a[0],n=a[1],r=Object(s.useState)(!1),l=Object(j.a)(r,2),u=l[0],b=l[1],O=Object(s.useState)(0),m=Object(j.a)(O,2),h=m[0],x=m[1],f=Object(s.useState)(5),v=Object(j.a)(f,2),N=v[0],p=v[1],_={loading:i,setLoading:n,inGame:u,setInGame:b,resetGame:function(){b(!1),x(0)},correctCount:h,setCorrectCount:x,maxQuestions:N,setMaxQuestions:p};return Object(o.jsx)(d.Provider,{value:_,children:t})},O=d,m=c.p+"static/media/undraw_adventure_4hum1.182b6171.svg",h=c.p+"static/media/worldwide.60bfee4c.svg",x=function(){var e=Object(s.useContext)(O).setInGame;return Object(o.jsxs)("div",{className:"quiz__list",children:[Object(o.jsx)("h3",{children:"Show your geography skills by answering questions"}),Object(o.jsx)("div",{className:"quiz__svg",children:Object(o.jsx)("img",{src:h,alt:""})}),Object(o.jsx)("div",{className:"quiz__start",children:Object(o.jsx)(r.b,{to:"/difficulty",className:"quiz__items start",onClick:function(){return e(!0)},children:"Start"})})]})},f=(c(45),["Loading","You can do it","Getting more questions from google"]);var v=function(){return Object(o.jsxs)("div",{className:"flex-center",children:[Object(o.jsxs)("div",{className:"sk-fading-circle",children:[Object(o.jsx)("div",{className:"sk-circle1 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle2 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle3 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle4 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle5 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle6 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle7 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle8 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle9 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle10 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle11 sk-circle"}),Object(o.jsx)("div",{className:"sk-circle12 sk-circle"})]}),Object(o.jsx)("p",{className:"loader",children:f[(e=3,Math.floor(Math.random()*e))]})]});var e},N=c(12),p=c.n(N),_=c(18),g=c(30),C=c.n(g),k=["AUT","BEL","BGR","HRV","CYP","CZE","DNK","EST","FIN","FRA","DEU","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","ESP","SWE","GBR","ARG","BOL","BRA","CHL","COL","ECU","PRY","PER","URY","VEN","CAN","CRI","CYB","DOM","SLV","GTM","HND","JAM","MEX","NIC","PAN","PRI","TTO","USA","NZL","AUS","AFG","ARM","CHN","GEO","HKG","IND","IDN","IRN","IRQ","ISR","JPN","MYS","MNG","NPL","PRK","PAK","PSE","PHL","QAT","SAU","SGP","KOR","SYR","THA","ARE","VNM","YEM","DZA","COG","EGY","GHA","KEN","NGA","ZAF","VAT"];function S(e){return Math.floor(Math.random()*e)}var q=function e(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,c=[],s=0;s<t;s++){var a=S(89);c.push(k[a])}return A(c)&&e(),c};function A(e){for(var t=0;t<e.length+1;t++)return t!==e.length-1&&e.includes(e[t],t+1)}var z=function(){var e=Object(s.useContext)(O),t=e.inGame,c=e.correctCount,a=e.setCorrectCount,i=e.maxQuestions,n=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(j.a)(i,2),r=n[0],l=n[1],u=Object(s.useState)(0),o=Object(j.a)(u,2),d=o[0],b=o[1],O=Object(s.useState)(null),m=Object(j.a)(O,2),h=m[0],x=m[1];Object(s.useEffect)((function(){return f(),function(){a({})}}),[d]);var f=function(){var e=Object(_.a)(p.a.mark((function e(){var t,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!1),t=q(),c=Math.floor(4*Math.random()),s=[],e.next=6,Promise.all(t.map(function(){var e=Object(_.a)(p.a.mark((function e(t,a){var i,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://restcountries.com/v3/alpha?codes=".concat(t));case 2:i=e.sent,a===c?(n=!0,x({name:i.data[0].name.common,capital:i.data[0].capital[0]})):n=!1,s.push({name:i.data[0].name.common,capital:i.data[0].capital[0],flag_url:i.data[0].flags[0],isCorrect:n});case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()));case 6:a(s),setTimeout((function(){l(!0)}),1e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{answers:c,response:r,setCountQuestion:b,countQuestions:d,correctAnswer:h}}(),r=n.answers,u=n.response,d=n.setCountQuestion,b=n.countQuestions,m=n.correctAnswer,h=Object(l.f)(),x=Object(s.useState)(!0),f=Object(j.a)(x,2),N=f[0],g=f[1];Object(s.useEffect)((function(){return t||h.push("/"),null}),[t,h]);var k=function(e){var t;(e.preventDefault(),N)&&(t="quiz__item"===e.target.classList[0]?e.target.parentNode:e.target,g(!1),t.getAttribute("capital-value")===m.capital?(t.classList.add("correct"),t.lastChild.classList.add("fa-check-circle"),a(c+1)):(t.classList.add("wrong"),t.lastChild.classList.add("fa-times-circle")),setTimeout((function(){b+1!==i?(g(!0),d(b+1)):h.push("/finish")}),500))};return Object(o.jsxs)(o.Fragment,{children:[u||Object(o.jsx)(v,{}),u&&Object(o.jsxs)("div",{className:"quiz__list",children:[Object(o.jsx)("h2",{children:"What is the capital of ".concat(m.name,"?")}),r.map((function(e,t){return Object(o.jsxs)("div",{className:"quiz__items","capital-value":e.capital,onClick:k,children:[Object(o.jsx)("button",{className:"quiz__item",children:e.capital}),Object(o.jsx)("i",{className:"fas icon"})]},t)}))]})]})},L=c.p+"static/media/undraw_winners_ao2o 2.d76bfdf8.svg",G=function(){var e=Object(s.useContext)(O),t=e.inGame,c=e.correctCount,a=e.resetGame,i=Object(l.f)();return Object(s.useEffect)((function(){return t||i.push("/"),null}),[t,i]),Object(o.jsxs)("div",{className:"quiz__list finish",children:[Object(o.jsx)("img",{src:L,alt:""}),Object(o.jsx)("h2",{children:"Results"}),Object(o.jsxs)("p",{children:["You got ",Object(o.jsx)("span",{children:c})," correct answers."]}),Object(o.jsx)(r.b,{to:"/",className:"quiz__items start",onClick:a,children:"Try Again"})]})},R=function(){var e=Object(s.useContext)(O),t=e.setMaxQuestions,c=e.inGame,a=Object(l.f)();Object(s.useEffect)((function(){return c||a.push("/"),null}),[c,a]);var i=function(e){e.preventDefault(),"quiz__items"===e.target.classList[0]?t(parseInt(e.target.firstChild.value)):t(parseInt(e.target.value)),a.push("/start")};return Object(o.jsxs)("div",{className:"quiz__list",children:[Object(o.jsx)("h2",{children:"Select the game difficulty"}),Object(o.jsx)("div",{className:"quiz__items",onClick:i,children:Object(o.jsx)("button",{className:"quiz__item",value:"5",children:"Easy"})}),Object(o.jsx)("div",{className:"quiz__items",onClick:i,children:Object(o.jsx)("button",{className:"quiz__item",value:"10",children:"Normal"})}),Object(o.jsx)("div",{className:"quiz__items",onClick:i,children:Object(o.jsx)("button",{className:"quiz__item",value:"15",children:"Hard"})})]})},E=function(){var e=Object(s.useContext)(O).resetGame;return Object(s.useEffect)((function(){e()}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"quiz",children:Object(o.jsx)("div",{className:"quiz__card",children:Object(o.jsxs)(r.a,{children:[Object(o.jsxs)("div",{className:"quiz__title",children:[Object(o.jsx)(r.b,{to:"/",onClick:e,children:Object(o.jsx)("h1",{children:"Country Quiz"})}),Object(o.jsx)("div",{className:"quiz__img",children:Object(o.jsx)("img",{src:m,alt:"",className:"quiz__image"})})]}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/start",children:Object(o.jsx)(z,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/difficulty",children:Object(o.jsx)(R,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/finish",children:Object(o.jsx)(G,{})})]})]})})}),Object(o.jsx)(u.a,{})]})};var w=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(b,{children:Object(o.jsx)(E,{})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),M()}},[[66,1,2]]]);
//# sourceMappingURL=main.89f26c43.chunk.js.map