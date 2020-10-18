(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{19:function(e,n,t){e.exports=t(33)},24:function(e,n,t){},25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),i=t.n(c),o=(t(24),t(25),t(11)),l=t.n(o),u=t(14),s=t(6),m=t(15),d=t.n(m),p=t(1),f=t(2),g=t(9);function b(){var e=Object(p.a)(['\n  font-family: "Fira Sans", sans-serif;\n  font-size: 1.1rem;\n']);return b=function(){return e},e}function h(){var e=Object(p.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1.6rem;\n  position: relative;\n  cursor: pointer;\n  &:hover {\n    top: -5px;\n  }\n']);return h=function(){return e},e}function v(){var e=Object(p.a)(["\n  font-size: 0.8rem;\n  position: absolute;\n  background: #557fc2;\n  cursor: pointer;\n  width: 17px;\n  height: 17px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  top: -8px;\n  right: -10px;\n  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);\n"]);return v=function(){return e},e}function E(){var e=Object(p.a)(["\n  padding: 5px;\n  background: #394e70;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: white;\n  border: none;\n  cursor: pointer;\n"]);return E=function(){return e},e}function y(){var e=Object(p.a)(["\n  padding: 5px;\n  background: transparent;\n  color: white;\n  border: none;\n  width: 80px;\n  &:focus {\n    outline: 0;\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: flex;\n  position: relative;\n  background: #46618b;\n  border-radius: 5px;\n"]);return x=function(){return e},e}function k(){var e=Object(p.a)(["\n  text-align: center;\n"]);return k=function(){return e},e}var j=function(e){var n=e.city,t=e.country,c=e.getWeather,i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],m=Object(a.useState)(!1),d=Object(s.a)(m,2),p=d[0],f=d[1],b=Object(a.useRef)("");return Object(a.useEffect)((function(){p&&b.current.focus()}),[p]),p?r.a.createElement(w,null,r.a.createElement(g.a.div,{initial:{opacity:0},animate:{opacity:1}},r.a.createElement(O,{onSubmit:function(e){e.preventDefault(),c(l)}},r.a.createElement(N,{ref:b,required:!0,value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement(C,{type:"submit"},"Search"),r.a.createElement(S,{onClick:function(){return f(!1)}},"X")))):r.a.createElement(w,null,r.a.createElement(z,{onClick:function(){return f(!0)}},n),r.a.createElement(F,null," ",t," "))},w=f.a.div(k()),O=f.a.form(x()),N=f.a.input(y()),C=f.a.button(E()),S=f.a.span(v()),z=f.a.h1(h()),F=f.a.h3(b());function W(){var e=Object(p.a)(["\n    width: 40%;\n  "]);return W=function(){return e},e}var D=function(e){var n=f.a.img(W()),t="";switch(e.condition){case"Clouds":t="./img/Mostly Cloudy-2x.png";break;case"Clear":t="./img/Mostly Sunny-2x.png";break;case"Haze":t="./img/Haze-2x.png";break;case"Hail":t="./img/Hail-2x.png";break;case"Fog":t="./img/Fog-2x.png";break;case"Tornado":t="./img/Tornado-2x.png";break;case"Dust":t="./img/Dust-2x.png";break;case"Mist":t="./img/Fog-2x.png";break;case"Snow":t="./img/Snow-2x.png";break;case"Rain":t="./img/Rain-2x.png";break;case"Drizzle":t="./img/Drizzle-2x.png";break;case"Thunderstorm":t="./img/Severe Thunderstorm-2x.png";break;default:t="./img/Fog-2x.png"}return r.a.createElement(n,{src:t,alt:""})},M=t(18);function T(){var e=Object(p.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 1.2rem;\n']);return T=function(){return e},e}var H=function(e){var n=e.temp,t=e.condition;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:"2rem"}},r.a.createElement(M.a,{theme:R,text:"".concat(n,"\u02daC")})),r.a.createElement(I,null,t))},I=f.a.h3(T()),R={reel:{height:"1.07em",display:"flex",alignItems:"flex-end",overflowY:"hidden",lineHeight:"0.97em",justifyContent:"center"},group:{transitionDelay:"0",transitionTimingFunction:"ease-in-out",transform:"translate(0, 0)",height:"1.5em"},number:{height:"1em",fontFamily:"Fira sans",fontWeight:200}};function A(){var e=Object(p.a)(["\n    margin: 0 auto;\n    background: ",";\n    width: 160px;\n    height: 210px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return A=function(){return e},e}var q=function(e){var n=e.temp,t=e.condition,a=e.city,c=e.country,i=e.getWeather,o=0,l=0,u=null;n>12?(l=(o=255*(1-(n-12)/28))-200,u="linear-gradient(\n      to top,\n      rgb(255, ".concat(o,", 0),\n      rgb(255, ").concat(Math.abs(l),", 0)\n    )")):+n<=12&&(l=(o=255*(1-(n+20)/32))-200,u="linear-gradient(\n      to top,\n      rgb(0, ".concat(o,", 255),\n      rgb(0, ").concat(Math.abs(l),", 255)\n    )"));var s=f.a.div(A(),u);return r.a.createElement(g.a.div,{initial:{scale:0},animate:{scale:1}},r.a.createElement(s,null,r.a.createElement(j,{getWeather:i,city:a,country:c}),r.a.createElement(D,{condition:t}),r.a.createElement(H,{temp:n,condition:t})))},B=function(e){var n=e.location,t=Object(a.useState)(""),c=Object(s.a)(t,2),i=(c[0],c[1]),o=Object(a.useState)(!1),m=Object(s.a)(o,2),p=m[0],f=m[1],g=Object(a.useState)(!1),b=Object(s.a)(g,2),h=b[0],v=b[1],E=Object(a.useState)({temp:null,city:null,condition:null,country:null}),y=Object(s.a)(E,2),x=y[0],k=y[1],j=function(){var e=Object(u.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),v(!0),e.prev=2,e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&APPID=c80b69787ac9c776d1cf86f8a6c50ce7"));case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,k({temp:a.main.temp,city:a.name,condition:a.weather[0].main,country:a.country}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),f(!0);case 15:v(!1);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j(n)}),[n]),p?r.a.createElement("div",{style:{color:"black"}},r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return f(!1)}},"No such Location Found - Click to Reset!")):h?r.a.createElement("div",{style:{color:"black",width:"200px",height:"240px",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(d.a,{color:"purple",size:10})):r.a.createElement(q,{temp:x.temp,condition:x.condition,city:x.city,country:x.country,getWeather:j})};function J(){return r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"header"},"Weather Around The World \ud83c\udf0e\ud83e\udd16"),r.a.createElement("div",{className:"links"},"by"," ",r.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},"@perwezkhan4"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"para"},"Click on the City/Country name to search your next location ! \u26a1\ud83d\ude80")))}var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"vancouver"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"hungary"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"germany"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"finland"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"sydney"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"beijing"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"tokyo"})),r.a.createElement("div",{className:"grid-item"},r.a.createElement(B,{location:"mali"}))),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ceac7a3f.chunk.js.map