let LINEDATA = [];
let data = [];
let labels = [];
graph();
graph_eth();

setInterval("graph()", 30000);
setInterval("graph_eth()", 30000);
function graph() {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')}&end=${moment(new Date()).format('YYYY-MM-DD')}`).
  then(response => {
    LINEDATA = { ...response.data.bpi };
    data = Object.keys(LINEDATA).map(key => LINEDATA[key]);
    labels = Object.keys(LINEDATA);
    console.log(data);
    console.log(labels);
    new Chart(document.getElementById("chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
        {
          label: 'Bitcoin',
          data: data,
          borderColor: "#3e95cd" }] } });
  });
}
function graph_eth() {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')}&end=${moment(new Date()).format('YYYY-MM-DD')}`).
  then(response => {
    LINEDATA = { ...response.data.bpi };
    data = Object.keys(LINEDATA).map(key => LINEDATA[key]);
    labels = Object.keys(LINEDATA);
    console.log(data);
    console.log(labels);
    new Chart(document.getElementById("chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
        {
          label: 'Bitcoin',
          data: data,
          borderColor: "#3e95cd" }] } })
  });
}
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=({bpi:{EUR:{rate_float:e}},bpi:{EUR:{code:t}},bpi:{USD:{rate_float:r}},bpi:{USD:{code:n}},bpi:{GBP:{rate_float:o}},bpi:{GBP:{code:a}},chartName:i,disclaimer:c})=>new class{constructor({euroRate:e,euroName:t,dolarRate:r,dolarName:n,name:o,disclaimer:a,poundRate:i,poundName:c}){this.euroRate=e,this.euroName=t,this.dolarRate=r,this.dolarName=n,this.poundName=c,this.poundRate=i,this.name=o,this.disclaimer=a}}({poundRate:o,poundName:a,euroRate:e,euroName:t,dolarRate:r,dolarName:n,name:i,disclaimer:c});const o="https://api.coindesk.com/v1/bpi/currentprice.json";async function a(){try{const e=await fetch(o);if(e.ok){const t=await e.json();return setTimeout(a,1e4),n(t)}throw Error("response not ok")}catch(e){return console.warn("zjeba??o si??"),setTimeout(a,1e4),""}}function i(){a().then(e=>e.disclaimer).then(e=>{document.querySelector(".disclaimer").innerText=e})}function c(){a().then(e=>`${e.dolarRate}`).then(e=>{const t=document.querySelector(".dolar"),r=document.querySelector(".up-down"),n=document.querySelector(".arrow"),o=document.querySelector(".arrow-wrapper");t.innerText<e&&(t.style.color="green",r.innerText="UP",r.style.color="green",n.style.fill="green",o.style.transform="rotate(90deg)",o.style.transformOrigin="50% 50%"),t.innerText>e&&(t.style.color="red",r.innerText="DOWN",r.style.color="red",n.style.fill="red",o.style.transform="rotate(270deg)"),t.innerText=`${e}`})}function u(){a().then(e=>`${e.euroRate}`).then(e=>{const t=document.querySelector(".euro");t.innerText<e&&(t.style.color="green"),t.innerText>e&&(t.style.color="red"),t.innerText=`${e}`})}function l(){a().then(e=>`${e.poundRate}`).then(e=>{const t=document.querySelector(".pound");t.innerText<e&&(t.style.color="green"),t.innerText>e&&(t.style.color="red"),t.innerText=`${e}`})}a(),setInterval(function(){i(),c(),u(),l()},11e3),i(),c(),u(),l()}]);
