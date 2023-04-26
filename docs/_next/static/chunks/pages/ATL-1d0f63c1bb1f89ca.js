(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{713:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ATL",function(){return t(7628)}])},8033:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var o=t(5893),r=t(7294),i=function(e){let{type:n,category:t,index:i}=e,[s,a]=(0,r.useState)(0);return(0,o.jsxs)("div",{className:"flex items-center justify-evenly ",children:[(0,o.jsx)("input",{value:s,readOnly:!0,name:"".concat([n,i].join("_")),className:"hidden"}),[0,1,2,3,4].map(e=>(0,o.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5 flex-1 cursor-pointer ".concat(s>=e?"text-yellow-400":"text-gray-300 dark:text-gray-500"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",onClick:()=>a(e),children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e))]})},s=t(2210);let a=["Nooit","Zelden","Soms","Vaak","Zeer vaak"];var l=function(e){let{questionaire:n}=e,{questions:t,categories:l,total_range:c}=n,[d,u]=(0,r.useState)(null),m=(0,r.useRef)(null),g=(0,r.useRef)(null),[f,x]=(0,r.useState)(null),[h]=(0,s.Z)("moreno_email","");return(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("form",{ref:m,children:(0,o.jsxs)("div",{className:"grid grid-cols-2 rounded",children:[(0,o.jsx)("div",{className:"p-4 text-sm font-medium bg-gray-200 rounded-l md:text-md",children:"Vraag"}),(0,o.jsx)("div",{className:"flex flex-row items-center text-xs font-medium bg-gray-200 rounded-r md:text-md",children:a.map((e,n)=>(0,o.jsx)("div",{className:"flex-1 text-center ",children:e},n))}),t.map((e,n)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("div",{className:"p-4",children:null==e?void 0:e.question}),(0,o.jsx)(i,{index:n,category:null==e?void 0:e.category,type:"atl"})]},n))]})}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"flex flex-row gap-3 px-4 mt-8",children:[(0,o.jsx)("button",{className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",onClick:e=>{e.preventDefault(),function(){let{total:e,categories:i,questions:s}=function(){let e=m.current,n=new FormData(e),o=Object.fromEntries(n.entries()),r=0,i={},s=[];for(let e of Object.keys(l))i[e]=0;for(let[e,n]of Object.entries(o)){let o=e.split("_")[1],a=t[o],l=null==a?void 0:a.category,c=parseInt(n);r+=c,i[l]||(i[l]=0),i[l]+=c,s.push({question:null==a?void 0:a.question,score:c})}let a=Object.entries(i).map(e=>{var n;let[t,o]=e;if(l[t])return{category:null===(n=l[t])||void 0===n?void 0:n.name,score:o}}).filter(e=>e),[d,u]=c?Object.entries(c).find(e=>{let[n,t]=e;return function(e,n){let[t,o]=n.split(" ");return"<="===t?e<=o:">="===t?e>=o:"<"===t?e<o:">"===t?e>o:"=="===t?e==o:"==="===t?e===o:(()=>{throw Error("Invalid operator in requirement string: "+n)})()}(r,n)}):[],g={score:r,text_score:u};return{total:g,categories:a,questions:s}}();(function(e){let{total:t,categories:o,questions:r}=e;var i="".concat(n.name," - "),s="";for(let e of(s+="Vragen \n",r))s+="".concat(e.question,": ").concat(e.score," \n");for(let e of(s+="\nCategorie\xebn \n",o))s+="".concat(e.category,": ").concat(e.score," \n");s+="\n"+"Totaal: ".concat(t.score," - ").concat(null==t?void 0:t.text_score," \n");var a="mailto:".concat(h,"?subject=");x(a+=encodeURIComponent(i)+"&body="+encodeURIComponent(s))})({total:e,categories:i,questions:s}),u((0,o.jsxs)("div",{className:"grid grid-cols-2",children:[i.map((e,n)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{children:[null==e?void 0:e.category,":"]}),(0,o.jsx)("div",{children:null==e?void 0:e.score})]},n)),(0,o.jsx)("div",{className:"font-medium",children:"Totaal:"}),(0,o.jsxs)("div",{className:"font-medium",children:[e.score," - ",null==e?void 0:e.text_score]})]})),setTimeout(()=>{g.current.scrollIntoView()},50)}()},children:"Scores berekenen"}),f&&(0,o.jsx)("a",{href:f,className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",children:"Email"})]}),(0,o.jsx)("div",{ref:g,children:d&&(0,o.jsx)("div",{className:"block p-4 mx-4 bg-white border border-gray-200 rounded-lg",children:d})})]})}},7628:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(5893);let r={name:"ATL",questions:[{question:"Vermoeid gevoel",category:"exhausted"},{question:" Moe wakker worden",category:"exhausted"},{question:"Onrustig slapen",category:"exhausted"},{question:"Geen zin om iets te ondernemen",category:"unknown"},{question:"Veel tijd nodig om bij te komen na lichaamsbeweging",category:"difficulty_moving"},{question:"Een inspanning te kort kunnen volhouden",category:"difficulty_moving"},{question:"De aandacht slecht bij een ding houden",category:"mental_distress"},{question:"Gauw afgeleid zijn",category:"mental_distress"},{question:"Drukte in het hoofd",category:"unknown"},{question:"Onnodige fouten maken",category:"mental_distress"},{question:"Tekort aan rust",category:"exhausted"},{question:"Moeite met ontspannen",category:"exhausted"},{question:"Geen energie om iets te ondernemen",category:"unknown"},{question:"Prikkelbaar",category:"mental_distress"},{question:"Moeite met lopen en bewegen",category:"difficulty_moving"},{question:"Stijfheid van het lichaam ",category:"difficulty_moving"}],categories:{difficulty_moving:{name:"Moeilijk bewegen"},exhausted:{name:"Vermoeid"},mental_distress:{name:"Mentale onrust"}}};var i=t(8033);function s(){return(0,o.jsx)(i.Z,{questionaire:r})}t(1664)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=713)}),_N_E=e.O()}]);