(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{204:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/NVL",function(){return t(1655)}])},8033:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),o=t(7294),i=function(e){let{type:n,category:t,index:i}=e,[s,a]=(0,o.useState)(-1);return(0,r.jsxs)("div",{className:"flex items-center justify-evenly ",children:[(0,r.jsx)("input",{value:s,readOnly:!0,name:"".concat([n,i].join("_")),className:"hidden",required:!0}),[0,1,2,3,4].map(e=>(0,r.jsx)("svg",{"aria-hidden":"true",className:"w-12 h-12 flex-1 cursor-pointer ".concat(s>=e?"text-yellow-400":"text-gray-300 dark:text-gray-500"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",onClick:()=>a(e),children:(0,r.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e))]})},s=t(2210),a=t(566),l=t.n(a);let c=["Nooit","Zelden","Soms","Vaak","Zeer vaak"];var d=function(e){let{questionaire:n}=e,{questions:t,categories:a,total_range:d}=n,[u,m]=(0,o.useState)(null),[g,f]=(0,o.useState)(null),x=(0,o.useRef)(null),h=(0,o.useRef)(null),[v,p]=(0,o.useState)(null),[y]=(0,s.Z)("moreno_email","");return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)("form",{ref:x,children:(0,r.jsxs)("div",{className:l().grid+" grid rounded",style:{gridTemplateColumns:"minmax(50%,auto) minmax(50%,1fr)"},children:[(0,r.jsx)("div",{className:"sticky top-0 p-4 text-sm font-medium text-white rounded-l bg-slate-500 md:text-md",children:"Vraag"}),(0,r.jsx)("div",{className:"sticky top-0 flex flex-row items-center text-xs font-medium text-white rounded-r bg-slate-500 md:text-md",children:c.map((e,n)=>(0,r.jsx)("div",{className:"flex-1 text-center ",children:e},n))}),t.map((e,n)=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("div",{className:"p-4",children:[n+1,": ",null==e?void 0:e.question]}),(0,r.jsx)(i,{index:n,category:null==e?void 0:e.category,type:"atl"})]},n))]})}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"flex flex-row gap-3 px-4 mt-8",children:[(0,r.jsx)("button",{className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",onClick:e=>{e.preventDefault(),function(){m(null),f(null);let{total:e,categories:i,questions:s,error:l}=function(){let e=x.current,n=new FormData(e),r=Object.fromEntries(n.entries()),o=0,i={},s=[];for(let e of Object.keys(a))i[e]=0;for(let[e,n]of Object.entries(r)){let r=e.split("_")[1],a=t[r],l=null==a?void 0:a.category,c=parseInt(n);if(o+=c,-1==n)return{error:parseInt(r)+1};i[l]||(i[l]=0),i[l]+=c,s.push({question:null==a?void 0:a.question,score:c})}let l=Object.entries(i).map(e=>{var n;let[t,r]=e;if(a[t])return{category:null===(n=a[t])||void 0===n?void 0:n.name,score:r}}).filter(e=>e),[c,u]=d?Object.entries(d).find(e=>{let[n,t]=e;return function(e,n){let[t,r]=n.split(" ");return"<="===t?e<=r:">="===t?e>=r:"<"===t?e<r:">"===t?e>r:"=="===t?e==r:"==="===t?e===r:(()=>{throw Error("Invalid operator in requirement string: "+n)})()}(o,n)}):[],m={score:o,text_score:u};return{total:m,categories:l,questions:s}}();l?f((0,r.jsxs)("div",{children:["Vraag ",l," is niet ingevuld"]})):(function(e){let{total:t,categories:r,questions:o}=e;var i="".concat(n.name," - "),s="";for(let e of(s+="Vragen \n",o))s+="".concat(e.question,": ").concat(e.score," \n");for(let e of(s+="\nCategorie\xebn \n",r))s+="".concat(e.category,": ").concat(e.score," \n");s+="\n"+"Totaal: ".concat(t.score," - ").concat(null==t?void 0:t.text_score," \n");var a="mailto:".concat(y,"?subject=");p(a+=encodeURIComponent(i)+"&body="+encodeURIComponent(s))}({total:e,categories:i,questions:s}),m((0,r.jsxs)("div",{className:"grid grid-cols-2",children:[i.map((e,n)=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("div",{children:[null==e?void 0:e.category,":"]}),(0,r.jsx)("div",{children:null==e?void 0:e.score})]},n)),(0,r.jsx)("div",{className:"font-medium",children:"Totaal:"}),(0,r.jsxs)("div",{className:"font-medium",children:[e.score," - ",null==e?void 0:e.text_score]})]}))),setTimeout(()=>{h.current.scrollIntoView()},50)}()},children:"Scores berekenen"}),v&&(0,r.jsx)("a",{href:v,className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",children:"Email"})]}),g&&(0,r.jsxs)("div",{class:"p-4 mb-4 mx-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",role:"alert",children:[(0,r.jsx)("span",{class:"font-medium",children:"Let op!"})," ",g]}),(0,r.jsx)("div",{ref:h,children:u&&(0,r.jsx)("div",{className:"block p-4 mx-4 bg-white border border-gray-200 rounded-lg",children:u})})]})}},1655:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(5893),o=t(8033);let i={name:"NVL",questions:[{question:"Pijnlijke steken in de borst",category:"tension"},{question:"Gespannenheid",category:"tension"},{question:"Een waas voor de ogen",category:"central"},{question:"Duizeligheid",category:"central"},{question:"In de war zijn, of het gevoel hebben het normale contact met de omgeving te verliezen",category:"central"},{question:"Een snellere of diepere ademhaling",category:"dyspneu"},{question:"Ademnood",category:"dyspneu"},{question:"Benauwd gevoel in of rond de borst",category:"dyspneu"},{question:"Opgeblazen gevoel in de buik",category:"unknown"},{question:"Tintelingen in vingers",category:"perifere"},{question:"Niet voldoende diep kunnen doorademen",category:"dyspneu"},{question:"Stijfheid van vingers of armen",category:"perifere"},{question:"Stijfheid rond de mond",category:"perifere"},{question:"Koude handen of voeten",category:"perifere"},{question:"Bonzen van het hart",category:"tension"},{question:"Angstig gevoel",category:"tension"}],categories:{central:{name:"Centrale krachten"},perifere:{name:"Perifere klachten"},dyspneu:{name:"Dyspneu of subjectieve adembelemmering"},tension:{name:"Spanning"}},total_range:{"< 13":"Normale score","< 20":"Normaal tot hoog","< 29":"Licht verhoogd",">= 30":"Sterk verhoogd"}};function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{questionaire:i})})}},566:function(e){e.exports={grid:"Questionaire_grid__pSSQn"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=204)}),_N_E=e.O()}]);