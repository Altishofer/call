"use strict";(self.webpackChunkcall=self.webpackChunkcall||[]).push([[678],{6558:function(e,t,n){n.r(t);var a=n(5785),l=n(7294);const s=["noun","verb","adjective","adverb","preposition"],c=["A1","A2","B1","B2","C1","C2"];t.default=function(){const{0:e,1:t}=(0,l.useState)(!1),{0:n,1:o}=(0,l.useState)(""),{0:i,1:r}=(0,l.useState)([]),{0:u,1:m}=(0,l.useState)(0),{0:p,1:d}=(0,l.useState)(""),{0:f,1:h}=(0,l.useState)(s[0]),{0:g,1:v}=(0,l.useState)(c[0]),{0:F,1:b}=(0,l.useState)(""),{0:E,1:y}=(0,l.useState)([]),{0:N,1:k}=(0,l.useState)(s.map((()=>!1))),{0:S,1:x}=(0,l.useState)(c.map((()=>!1)));(0,l.useEffect)((()=>{const e=document.querySelector(".container"),t=document.querySelector(".input");console.log(F,t.value),F.empty||F!==t.value?e.classList.remove("wiggle"):(m(F.length),e.classList.add("wiggle"))}),[F]);const C=()=>{t(!1),o(""),d(""),m(0),y([]);fetch("static/corpus.csv?wordType="+f+"&cefrLevel="+g).then((e=>e.text())).then((e=>{const t=e.split("\n").filter((e=>{const t=e.split(",");return N[s.indexOf(t[1])]&&S[c.indexOf(t[2])]}));if(t.length>0){const e=t[Math.floor(Math.random()*t.length)].split(",")[0].trim().replace(/"(.*)"$/,"$1");b(e);fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+e).then((e=>e.json())).then((e=>{const t=[];for(const n of e[0].meanings){if("noun"===n.partOfSpeech)for(const e of n.definitions){let n=e.definition;n=n.replace(new RegExp("[^a-zA-Z0-9 ]","g"),""),n=n.replace(F,"#".repeat(F.length)),console.log(n),t.push(n)}console.log(t),t.length<2||r(t)}})).catch((e=>{console.error(e),C()}))}else b("No Cefr & POS selected")}))};return l.createElement("div",{className:"container"},l.createElement("h1",{className:"header-title"},"Guess my Word"),l.createElement("div",{className:"word-types"},s.map((e=>l.createElement("button",{key:e,onClick:()=>(e=>{const t=s.map(((t,n)=>n===s.indexOf(e)));k(t),h(e)})(e),className:"btn "+(N[s.indexOf(e)]?"active":""),style:{backgroundColor:N[s.indexOf(e)]?"#000000":"#FFFFFF",color:N[s.indexOf(e)]?"#FFFFFF":"#000000"}},e)))),l.createElement("div",{className:"cefr-levels"},c.map((e=>l.createElement("button",{key:e,onClick:()=>(e=>{const t=c.map(((t,n)=>n===c.indexOf(e)));x(t),v(e)})(e),className:"btn "+(S[c.indexOf(e)]?"active":""),style:{backgroundColor:S[c.indexOf(e)]?"#000000":"#FFFFFF",color:S[c.indexOf(e)]?"#FFFFFF":"#000000"}},e)))),l.createElement("div",{className:"input-container"},l.createElement("div",{className:"input-display"},n.split("").map(((t,a)=>l.createElement("span",{key:a,className:"input-letter"+(e?" rainbow":""),disabled:F===n&&""!==F},t))),Array(Math.max(0,F.length-n.length)).fill("_").map(((e,t)=>l.createElement("span",{key:t+n.length,className:"input-underline"},e)))),l.createElement("input",{type:"text",value:p,onChange:e=>{console.log(F),d(e.target.value.slice(0,F.length)),o(e.target.value.slice(0,F.length)),e.target.value.slice(0,F.length)===F?t(!0):t(!1)},className:"input",autoComplete:"new-password"}),l.createElement("div",{className:"button-container"},l.createElement("button",{onClick:()=>{const e=document.querySelector(".input"),t=F.split("");let n="";if(t.length>u){for(let e=0;e<u+1;e++)n+=t[e];m(u+1)}else m(0);o(n),d(e.value)},className:"btn",disabled:u>=F.length||p===F},"Reveal Next Letter"),l.createElement("button",{onClick:C,className:"btn",disabled:u<F.length&&p!==F&&0!==E.length},"Random Word"))),l.createElement("div",{className:"hints-container"},E.map((e=>l.createElement("p",{key:e},e))),l.createElement("button",{onClick:()=>{if(0===i.length)return;let e=i.pop();null!==e&&"no hints found in corpora"!==e&&y([].concat((0,a.Z)(E),[""+e]))},className:"btn"},"Add Hint")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fd7f70470db5c7abef53.js.map