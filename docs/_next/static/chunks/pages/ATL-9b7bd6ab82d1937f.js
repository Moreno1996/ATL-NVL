(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ATL",function(){return n(7628)}])},2852:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(5893),r=n(7294),l=function(e){let{type:t,category:n,index:l}=e,[i,s]=(0,r.useState)(-1);return(0,o.jsxs)("div",{className:"flex items-center justify-evenly ",children:[(0,o.jsx)("input",{value:i,readOnly:!0,name:"".concat([t,l].join("_")),className:"hidden",required:!0}),[0,1,2,3,4].map(e=>(0,o.jsx)("svg",{"aria-hidden":"true",className:"w-12 h-12 flex-1 cursor-pointer ".concat(i>=e?"text-yellow-400":"text-gray-300 dark:text-gray-500"),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",onClick:()=>s(e),children:(0,o.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e))]})},i=n(2210),s=n(566),a=n.n(s);let c=["Nooit","Zelden","Soms","Vaak","Zeer vaak"];function d(e,t){let[,n]=e?Object.entries(e).find(e=>{let[n,o]=e;return function(e,t){let[n,o]=t.split(" ");return"<="===n?e<=o:">="===n?e>=o:"<"===n?e<o:">"===n?e>o:"=="===n?e==o:"==="===n?e===o:(()=>{throw Error("Invalid operator in requirement string: "+t)})()}(t,n)}):[];return n}var u=function(e){let{questionaire:t}=e,{questions:n,categories:s,total_range:u}=t,[g,m]=(0,r.useState)(null),[x,f]=(0,r.useState)(null),h=(0,r.useRef)(null),v=(0,r.useRef)(null),[p,y]=(0,r.useState)(null),[j]=(0,i.Z)("moreno_email","");return(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("form",{ref:h,children:(0,o.jsxs)("div",{className:a().grid+" grid rounded",style:{gridTemplateColumns:"minmax(50%,auto) minmax(50%,1fr)"},children:[(0,o.jsx)("div",{className:"sticky top-0 p-4 text-sm font-medium text-white rounded-l bg-slate-500 md:text-md",children:"Vraag"}),(0,o.jsx)("div",{className:"sticky top-0 flex flex-row items-center text-xs font-medium text-white rounded-r bg-slate-500 md:text-md",children:c.map((e,t)=>(0,o.jsx)("div",{className:"flex-1 text-center ",children:e},t))}),n.map((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"p-4",children:[t+1,": ",null==e?void 0:e.question]}),(0,o.jsx)(l,{index:t,category:null==e?void 0:e.category,type:"atl"})]},t))]})}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"flex flex-row gap-3 px-4 mt-8",children:[(0,o.jsx)("button",{className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",onClick:e=>{e.preventDefault(),function(){m(null),f(null);let{total:e,categories:l,questions:i,error:a}=function(){let e=h.current,t=new FormData(e),o=Object.fromEntries(t.entries()),r=0,l={},i=[];for(let e of Object.keys(s))l[e]=0;for(let[e,t]of Object.entries(o)){let o=e.split("_")[1],s=n[o],a=null==s?void 0:s.category,c=parseInt(t);if(r+=c,-1==t)return{error:parseInt(o)+1};l[a]||(l[a]=0),l[a]+=c,i.push({question:null==s?void 0:s.question,score:c})}let a=Object.entries(l).map(e=>{let[t,n]=e,o=s[t];if(!o)return;let{text:r,color:l}=d(null==o?void 0:o.ranges,n);return{category:null==o?void 0:o.name,score:n,text_score:r,color:l}}).filter(e=>e),{text:c,color:g}=d(u,r),m={score:r,text_score:c,color:g};return{total:m,categories:a,questions:i}}();a?f((0,o.jsxs)("div",{children:["Vraag ",a," is niet ingevuld"]})):(console.log("categories",l),function(e){let{total:n,categories:o,questions:r}=e;var l="".concat(t.name," - "),i="";for(let e of(i+="".concat(t.name,", Ingevuld op ").concat(function(){let e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();return o<10&&(o="0"+o),n<10&&(n="0"+n),"".concat(o,"-").concat(n,"-").concat(t)}(),", ")+"Totaal: ".concat(null==n?void 0:n.text_score," (").concat(n.score,"), "),o))i+="".concat(e.category,": ").concat(null==e?void 0:e.text_score," (").concat(e.score,"), ");i+="\nVragen \n";let s=1;for(let e of r)i+="".concat(s,". ").concat(e.question,": ").concat(c[e.score]," (").concat(e.score,") \n"),s+=1;var a="mailto:".concat(j,"?subject=");y(a+=encodeURIComponent(l)+"&body="+encodeURIComponent(i))}({total:e,categories:l,questions:i}),m((0,o.jsxs)("div",{className:"grid grid-cols-2",children:[l.map((e,t)=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{children:[null==e?void 0:e.category,":"]}),(0,o.jsxs)("div",{style:{color:(null==e?void 0:e.color)||"black",fontWeight:"bold"},children:[null==e?void 0:e.score," - ",null==e?void 0:e.text_score]})]},t)),(0,o.jsx)("div",{className:"font-medium",children:"Totaal:"}),(0,o.jsxs)("div",{className:"font-medium",style:{color:(null==e?void 0:e.color)||"black",fontWeight:"bold"},children:[e.score," - ",null==e?void 0:e.text_score]})]}))),setTimeout(()=>{v.current.scrollIntoView()},50)}()},children:"Scores berekenen"}),p&&(0,o.jsx)("a",{href:p,target:"_blank",className:"px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700",children:"Email"})]}),x&&(0,o.jsxs)("div",{class:"p-4 mb-4 mx-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",role:"alert",children:[(0,o.jsx)("span",{class:"font-medium",children:"Let op!"})," ",x]}),(0,o.jsx)("div",{ref:v,children:g&&(0,o.jsx)("div",{className:"block p-4 mx-4 bg-white border border-gray-200 rounded-lg",children:g})})]})}},7628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(5893);let r={name:"ATL",questions:[{question:"Vermoeid gevoel",category:"exhausted"},{question:" Moe wakker worden",category:"exhausted"},{question:"Onrustig slapen",category:"exhausted"},{question:"Geen zin om iets te ondernemen",category:"unknown"},{question:"Veel tijd nodig om bij te komen na lichaamsbeweging",category:"difficulty_moving"},{question:"Een inspanning te kort kunnen volhouden",category:"difficulty_moving"},{question:"De aandacht slecht bij een ding houden",category:"mental_distress"},{question:"Gauw afgeleid zijn",category:"mental_distress"},{question:"Drukte in het hoofd",category:"unknown"},{question:"Onnodige fouten maken",category:"mental_distress"},{question:"Tekort aan rust",category:"exhausted"},{question:"Moeite met ontspannen",category:"exhausted"},{question:"Geen energie om iets te ondernemen",category:"unknown"},{question:"Prikkelbaar",category:"mental_distress"},{question:"Moeite met lopen en bewegen",category:"difficulty_moving"},{question:"Stijfheid van het lichaam ",category:"difficulty_moving"}],categories:{difficulty_moving:{name:"Moeite met bewegen",ranges:{"< 7":{text:"Goed",color:"green"},"< 8":{text:"Gelijk",color:"orange"},">= 8":{text:"Verhoogd",color:"red"}}},exhausted:{name:"Moe",ranges:{"< 9":{text:"Goed",color:"green"},"< 10":{text:"Gelijk",color:"orange"},">= 10":{text:"Verhoogd",color:"red"}}},mental_distress:{name:"Mentale onrust",ranges:{"< 7":{text:"Goed",color:"green"},"< 8":{text:"Gelijk",color:"orange"},">= 8":{text:"Verhoogd",color:"red"}}}},total_range:{"< 19":{text:"Goed",color:"green"},"< 28":{text:"Hoognormaal",color:"orange"},"< 31":{text:"Licht verhoogd",color:"red"},">= 31":{text:"Sterk verhoogd",color:"purple"}}};var l=n(2852);function i(){return(0,o.jsx)(l.Z,{questionaire:r})}n(1664)},566:function(e){e.exports={grid:"Questionaire_grid__pSSQn"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=713)}),_N_E=e.O()}]);