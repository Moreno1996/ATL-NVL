(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ATL",function(){return n(7628)}])},8033:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(5893),r=n(7294),i=function(e){let{type:t,category:n,index:i}=e,[s,a]=(0,r.useState)(-1);return(0,o.jsxs)("div",{className:"flex items-center justify-evenly ",children:[(0,o.jsx)("input",{value:s,readOnly:!0,name:"".concat([t,i].join("_")),className:"hidden",required:!0}),[0,1,2,3,4].map(e=>(0,o.jsx)("svg",{"aria-hidden":"true",className:"w-12 h-12 flex-1 cursor-pointer ".concat(s>=e?"text-yellow-400":"text-gray-300 dark:text-gray-500"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",onClick:()=>a(e),children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e))]})},s=n(2210),a=n(566),l=n.n(a);let c=["Nooit","Zelden","Soms","Vaak","Zeer vaak"];var d=function(e){let{questionaire:t}=e,{questions:n,categories:a,total_range:d}=t,[u,m]=(0,r.useState)(null),[g,x]=(0,r.useState)(null),f=(0,r.useRef)(null),h=(0,r.useRef)(null),[v,y]=(0,r.useState)(null),[p]=(0,s.Z)("moreno_email","");return(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("form",{ref:f,children:(0,o.jsxs)("div",{className:l().grid+" grid rounded",style:{gridTemplateColumns:"minmax(50%,auto) minmax(50%,1fr)"},children:[(0,o.jsx)("div",{className:"sticky top-0 p-4 text-sm font-medium text-white rounded-l bg-slate-500 md:text-md",children:"Vraag"}),(0,o.jsx)("div",{className:"sticky top-0 flex flex-row items-center text-xs font-medium text-white rounded-r bg-slate-500 md:text-md",children:c.map((e,t)=>(0,o.jsx)("div",{className:"flex-1 text-center ",children:e},t))}),n.map((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"p-4",children:[t+1,": ",null==e?void 0:e.question]}),(0,o.jsx)(i,{index:t,category:null==e?void 0:e.category,type:"atl"})]},t))]})}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"flex flex-row gap-3 px-4 mt-8",children:[(0,o.jsx)("button",{className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",onClick:e=>{e.preventDefault(),function(){m(null),x(null);let{total:e,categories:i,questions:s,error:l}=function(){let e=f.current,t=new FormData(e),o=Object.fromEntries(t.entries()),r=0,i={},s=[];for(let e of Object.keys(a))i[e]=0;for(let[e,t]of Object.entries(o)){let o=e.split("_")[1],a=n[o],l=null==a?void 0:a.category,c=parseInt(t);if(r+=c,-1==t)return{error:parseInt(o)+1};i[l]||(i[l]=0),i[l]+=c,s.push({question:null==a?void 0:a.question,score:c})}let l=Object.entries(i).map(e=>{var t;let[n,o]=e;if(a[n])return{category:null===(t=a[n])||void 0===t?void 0:t.name,score:o}}).filter(e=>e),[c,u]=d?Object.entries(d).find(e=>{let[t,n]=e;return function(e,t){let[n,o]=t.split(" ");return"<="===n?e<=o:">="===n?e>=o:"<"===n?e<o:">"===n?e>o:"=="===n?e==o:"==="===n?e===o:(()=>{throw Error("Invalid operator in requirement string: "+t)})()}(r,t)}):[],m={score:r,text_score:u};return{total:m,categories:l,questions:s}}();l?x((0,o.jsxs)("div",{children:["Vraag ",l," is niet ingevuld"]})):(function(e){let{total:n,categories:o,questions:r}=e;var i="".concat(t.name," - "),s="";for(let e of(s+="Vragen \n",r))s+="".concat(e.question,": ").concat(e.score," \n");for(let e of(s+="\nCategorie\xebn \n",o))s+="".concat(e.category,": ").concat(e.score," \n");s+="\n"+"Totaal: ".concat(n.score," - ").concat(null==n?void 0:n.text_score," \n");var a="mailto:".concat(p,"?subject=");y(a+=encodeURIComponent(i)+"&body="+encodeURIComponent(s))}({total:e,categories:i,questions:s}),m((0,o.jsxs)("div",{className:"grid grid-cols-2",children:[i.map((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{children:[null==e?void 0:e.category,":"]}),(0,o.jsx)("div",{children:null==e?void 0:e.score})]},t)),(0,o.jsx)("div",{className:"font-medium",children:"Totaal:"}),(0,o.jsxs)("div",{className:"font-medium",children:[e.score," - ",null==e?void 0:e.text_score]})]}))),setTimeout(()=>{h.current.scrollIntoView()},50)}()},children:"Scores berekenen"}),v&&(0,o.jsx)("a",{href:v,className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",children:"Email"})]}),g&&(0,o.jsxs)("div",{class:"p-4 mb-4 mx-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",role:"alert",children:[(0,o.jsx)("span",{class:"font-medium",children:"Let op!"})," ",g]}),(0,o.jsx)("div",{ref:h,children:u&&(0,o.jsx)("div",{className:"block p-4 mx-4 bg-white border border-gray-200 rounded-lg",children:u})})]})}},7628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893);let r={name:"ATL",questions:[{question:"Vermoeid gevoel",category:"exhausted"},{question:" Moe wakker worden",category:"exhausted"},{question:"Onrustig slapen",category:"exhausted"},{question:"Geen zin om iets te ondernemen",category:"unknown"},{question:"Veel tijd nodig om bij te komen na lichaamsbeweging",category:"difficulty_moving"},{question:"Een inspanning te kort kunnen volhouden",category:"difficulty_moving"},{question:"De aandacht slecht bij een ding houden",category:"mental_distress"},{question:"Gauw afgeleid zijn",category:"mental_distress"},{question:"Drukte in het hoofd",category:"unknown"},{question:"Onnodige fouten maken",category:"mental_distress"},{question:"Tekort aan rust",category:"exhausted"},{question:"Moeite met ontspannen",category:"exhausted"},{question:"Geen energie om iets te ondernemen",category:"unknown"},{question:"Prikkelbaar",category:"mental_distress"},{question:"Moeite met lopen en bewegen",category:"difficulty_moving"},{question:"Stijfheid van het lichaam ",category:"difficulty_moving"}],categories:{difficulty_moving:{name:"Moeilijk bewegen"},exhausted:{name:"Vermoeid"},mental_distress:{name:"Mentale onrust"}}};var i=n(8033);function s(){return(0,o.jsx)(i.Z,{questionaire:r})}n(1664)},566:function(e){e.exports={grid:"Questionaire_grid__pSSQn"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=713)}),_N_E=e.O()}]);