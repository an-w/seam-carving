import{d as e,t,r as a,c as l,w as i,a as s,o as n,b as h,e as r,u as o,i as g,f as m,g as d,h as u,p,j as c,k as w,F as v,l as f,H as y}from"./vendor.b0a1d497.js";const x={class:"flex border border-gray-300 items-center p-5 bg-gray-100 rounded-lg"},b={class:"flex flex-col items-center"},M={class:"flex items-center w-60 mb-2 justify-end"},D=r("span",{class:""},"Width",-1),V={class:"flex items-center w-60 mb-2 justify-end"},H=r("span",{class:""},"Height",-1),z={class:"flex items-center"},A={class:"flex flex-col h-full"},P={class:"\n                    w-28\n                    py-1\n                    border\n                    bg-white\n                    border-gray-300\n                    rounded-md\n                    shadow-lg\n                    hover:border-gray-500\n                    cursor-pointer\n                    mx-2\n                    flex\n                    pl-3\n                    mb-1\n                "},I=r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#222222"},[r("path",{d:"M0 0h24v24H0z",fill:"none"}),r("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"})],-1),C=r("span",{class:"ml-2"},"Upload",-1),U=r("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#222222"},[r("g",null,[r("rect",{fill:"none",height:"24",width:"24"})]),r("g",null,[r("path",{d:"M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"})])],-1),j=r("span",{class:"ml-2"},"Save",-1),O=r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff"},[r("path",{d:"M0 0h24v24H0z",fill:"none"}),r("path",{d:"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"})],-1),S=r("span",{class:"ml-2"},"Resize",-1);var k=e({props:{height:Number,width:Number},emits:["submit","change","save"],setup(e,{emit:p}){const c=e,{height:w,width:v}=t(c);let f=a(0),y=a(0),k=a(!0),F=l((()=>k.value?"px":"%"));i([w,v],(e=>{k.value=!0,y.value=o(e[0]),f.value=o(e[1])}),{immediate:!0});const R=()=>{f.value=k.value?o(v):100,y.value=k.value?o(w):100},B=()=>{let e=Math.floor(k.value?y.value:y.value/100*o(w)),t=Math.floor(k.value?f.value:f.value/100*o(v));p("submit",{inputHeight:e,inputWidth:t})};return(e,t)=>{const a=s("el-input"),l=s("el-switch");return n(),h("div",x,[r("div",b,[r("div",M,[D,r(a,{onFocus:t[1]||(t[1]=e=>e.target.select()),class:"w-32 mx-10 mr-7 ml-3",modelValue:o(f),"onUpdate:modelValue":t[2]||(t[2]=e=>g(f)?f.value=e:f=e),modelModifiers:{number:!0},type:"number"},{append:m((()=>[d(u(o(F)),1)])),_:1},8,["modelValue"])]),r("div",V,[H,r(a,{onFocus:t[3]||(t[3]=e=>e.target.select()),class:"w-32 mx-10 mr-7 ml-3",modelValue:o(y),"onUpdate:modelValue":t[4]||(t[4]=e=>g(y)?y.value=e:y=e),modelModifiers:{number:!0},type:"number"},{append:m((()=>[d(u(o(F)),1)])),_:1},8,["modelValue"])]),r("div",z,[r("span",{class:["w-3",{"font-bold text-lg":!o(k)}]},"%",2),r(l,{class:"text-white mx-3",modelValue:o(k),"onUpdate:modelValue":t[5]||(t[5]=e=>g(k)?k.value=e:k=e),"inactive-color":"#2563eb","active-color":"#1e40af",onChange:R},null,8,["modelValue"]),r("span",{class:["w-3",{"font-bold text-lg":o(k)}]},"px",2)])]),r("div",A,[r("label",P,[I,C,r("input",{type:"file",accept:"image/*",class:"hidden",onChange:t[6]||(t[6]=e=>p("change",e))},null,32)]),r("button",{class:"w-28 py-1 text-black border bg-white rounded-md border-gray-300 hover:border-gray-500 shadow-lg mx-2 flex pl-3",onClick:t[7]||(t[7]=e=>p("save",e))},[U,j]),r("button",{class:"w-28 py-1 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-800 mx-2 flex pl-3 mt-auto",onClick:B},[O,S])])])}}});class F{constructor(e,t,a){this.seams=[],this.toGsBuffer=e=>new Uint8ClampedArray(e.map((e=>e.map((e=>[e,e,e,255])))).flat(2)),this.imageData=e,this.width=t,this.height=a,this.energyMap=this.sobel(this.toGsMatrix(e.data,e.width))}async insert(e=!0){let t=this.seams.shift(),[a,l]=e?this.insertVerticalPath(this.imageData.data,this.energyMap,t):this.insertHorizontalPath(this.imageData.data,this.energyMap,t),i=new ImageData(l,this.imageData.width,this.imageData.height);return this.imageData=new ImageData(a,this.imageData.width+ +e,this.imageData.height+ +!e),[this.imageData,i]}async carve(e=!0){let t=e?this.findVerticalPath(this.energyMap):this.findHorizontalPath(this.energyMap),[a,l]=e?this.removeVerticalPath(this.imageData.data,this.energyMap,t):this.removeHorizontalPath(this.imageData.data,this.energyMap,t),i=new ImageData(l,this.imageData.width,this.imageData.height);return this.imageData=new ImageData(a,this.imageData.width-+e,this.imageData.height-+!e),[this.imageData,i]}sobel(e){let t=e.length,a=e[0].length,l=this.create2DMatrix(t,a);e.forEach((e=>{e.push(e[e.length-1]),e.unshift(e[0])})),e.push(e[e.length-1]),e.unshift(e[0]);for(let i=0;i<t;++i)for(let t=0;t<a;++t){const a=-e[i][t]+e[i+2][t]-2*e[i][t+1]+2*e[i+2][t+1]-e[i][t+2]+e[i+2][t+2],s=-e[i][t]+e[i][t+2]-2*e[i+1][t]+2*e[i+1][t+2]-e[i+2][t]+e[i+2][t+2];l[i][t]=Math.sqrt(a**2+s**2)}return l}toGsMatrix(e,t){let a=[];for(let l=0;l<e.length;l+=4*t){let i=[];for(let a=0;a<4*t;a+=4){let t=e.slice(l+a,l+a+4);i.push((t[0]+t[1]+t[2])/3)}a.push(i)}return a}findVerticalPath(e){let t=this.copyMatrix(e),a=e.length,l=e[0].length;for(let n=1;n<a;++n)for(let e=0;e<l;++e){let a=0!==e?t[n-1][e-1]:t[n-1][e],i=e!==l-1?t[n-1][e+1]:t[n-1][e];t[n][e]+=Math.min(a,t[n-1][e],i)}let i=t[a-1].indexOf(Math.min(...t[a-1])),s=[i];for(let n=a-2;n>=0;--n){let e=0!==i?t[n][i-1]:1/0,a=i!==l-1?t[n][i+1]:1/0,h=[e,t[n][i],a];i+=h.indexOf(Math.min(...h))-1,s.unshift(i)}return s}findHorizontalPath(e){let t=this.copyMatrix(e),a=e.length,l=e[0].length;for(let h=1;h<l;++h)for(let e=0;e<a;++e){let l=0!==e?t[e-1][h-1]:t[e][h-1],i=e!==a-1?t[e+1][h-1]:t[e][h-1];t[e][h]+=Math.min(l,t[e][h-1],i)}let i=t.map((e=>e[l-1])),s=i.indexOf(Math.min(...i)),n=[s];for(let h=l-2;h>=0;--h){let e=0!==s?t[s-1][h]:1/0,l=s!==a-1?t[s+1][h]:1/0,i=[e,t[s][h],l];s+=i.indexOf(Math.min(...i))-1,n.unshift(s)}return n}async initVerticalInsertion(e){let t=this.copyMatrix(this.energyMap),a=[...Array(t.length)].map((a=>[...Array(t[0].length+e)].map(((e,t)=>t))));for(let l=0;l<e;++l){let e=this.findVerticalPath(t);this.seams.push(e.map(((e,t)=>a[t][e])));for(let l=0;l<e.length;++l)t[l].splice(e[l],1),a[l].splice(e[l],2);await new Promise((e=>setTimeout(e,0)))}}async initHorizontalInsertion(e){let t=this.copyMatrix(this.energyMap),a=[...Array(t.length+2*e)].map(((e,a)=>[...Array(t[0].length)].map((()=>a))));for(let l=0;l<e;++l){let e=this.findHorizontalPath(t);this.seams.push(e.map(((e,t)=>a[e][t])));for(let l=0;l<e.length;++l){for(let a=e[l];a<t.length-1;++a)t[a][l]=t[a+1][l];for(let t=e[l];t<a.length-2;++t)a[t][l]=a[t+2][l]}t.pop(),a.pop(),a.pop(),await new Promise((e=>setTimeout(e,0)))}}removeVerticalPath(e,t,a){let l=new Uint8ClampedArray(e.length-4*a.length),i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=s-4;for(let h=0;h<a.length;++h){t[h].splice(a[h],1);let r=e.slice(h*s,h*s+4*a[h]),o=e.slice(h*s+4*a[h]+4,(h+1)*s);l.set(r,h*n),l.set(o,h*n+4*a[h]);let g=h*s+4*a[h]+4;i[g]=255,i[g+1]=0,i[g+2]=0,i[g+3]=255}return[l,i]}insertVerticalPath(e,t,a){let l=new Uint8ClampedArray(e.length+4*a.length),i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=s+4;for(let h=0;h<a.length;++h){t[h].splice(a[h],0,a[h]);let r=e.slice(h*s,h*s+4*a[h]),o=e.slice(h*s+4*a[h]-4,(h+1)*s+4);l.set(r,h*n),l.set(o,h*n+4*a[h]);let g=h*s+4*a[h]+4;i[g]=255,i[g+1]=0,i[g+2]=0,i[g+3]=255}return[l,i]}insertHorizontalPath(e,t,a){let l=new Uint8ClampedArray(e.length+4*a.length);l.set(e.subarray(0,e.length));let i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=t.length+1;t.push(t[t.length-1]);for(let h=0;h<a.length;++h){for(let i=n-1;i>a[h];--i)t[i][h]=t[i-1][h],l[i*s+4*h]=e[i*s+4*h-s],l[i*s+4*h+1]=e[i*s+4*h-s+1],l[i*s+4*h+2]=e[i*s+4*h-s+2],l[i*s+4*h+3]=e[i*s+4*h-s+3];i[a[h]*s+4*h]=255,i[a[h]*s+4*h+1]=0,i[a[h]*s+4*h+2]=0,i[a[h]*s+4*h+3]=255}return[l,i]}removeHorizontalPath(e,t,a){let l=new Uint8ClampedArray(e.length-4*a.length);l.set(e.subarray(0,e.length-4*a.length));let i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=t.length-1;for(let h=0;h<a.length;++h){for(let i=a[h];i<n;++i)t[i][h]=t[i+1][h],l[i*s+4*h]=e[i*s+4*h+s],l[i*s+4*h+1]=e[i*s+4*h+s+1],l[i*s+4*h+2]=e[i*s+4*h+s+2],l[i*s+4*h+3]=e[i*s+4*h+s+3];i[a[h]*s+4*h]=255,i[a[h]*s+4*h+1]=0,i[a[h]*s+4*h+2]=0,i[a[h]*s+4*h+3]=255}return t.pop(),[l,i]}copyMatrix(e){return e.map((e=>[...e]))}create2DMatrix(e,t){return[...Array(e)].map((e=>Array(t)))}}p("data-v-e8662376");const R={class:"h-full",direction:"vertical"},B=r("div",{class:"text-4xl mb-5 mt-5 font-bold"}," Seam Carving ",-1),T={class:"text-center"},_={class:"flex justify-center"},G=r("canvas",{class:"img-canvas mt-5 mx-auto",style:{}},null,-1);c();var L=e({setup(e){let t,l,i,s=a(""),g=a(0),m=a(0);a([]),w((()=>{t=document.querySelector(".img-canvas"),l=t.getContext("2d"),f("/seam-carving-js/assets/dali.af640232.png")}));const d=()=>{l.getImageData(0,0,t.width,t.height),v.saveAs(t.toDataURL("image/png"),`resized-${s.value.split(/[/\\]/).pop()}`)},u=e=>{let t=e.target.files[0];s.value=t.name;let a=new FileReader;a.readAsDataURL(t),a.onload=e=>{e.target.readyState===FileReader.DONE&&f(e.target.result)}},p=async(e=100,a=!0)=>{a?i.initVerticalInsertion(e):i.initHorizontalInsertion(e);for(let s=0;s<e;++s){const[e,s]=await i.insert(a);l.putImageData(s,0,0),await new Promise((e=>setTimeout(e,30))),t.width=e.width,t.height=e.height,l.putImageData(e,0,0)}},c=async(e=100,a=!0)=>{for(let s=0;s<Math.abs(e);++s){const[e,s]=await i.carve(a);l.putImageData(s,0,0),await new Promise((e=>setTimeout(e,30))),t.width=e.width,t.height=e.height,l.putImageData(e,0,0)}},f=e=>{const a=new Image;a.src=e,a.crossOrigin="Anonymous",a.onload=()=>{t.width=a.width,t.height=a.height,g.value=a.width,m.value=a.height,l.drawImage(a,0,0),a.style.display="none",i=new F(l.getImageData(0,0,t.width,t.height),t.width,t.height)}},y=async({inputHeight:e,inputWidth:a})=>{a>g.value?await p(a-g.value,!0):await c(g.value-a,!0),e>m.value?await p(e-m.value,!1):await c(m.value-e,!1),g.value=t.width,m.value=t.height};return(e,t)=>(n(),h("div",R,[B,r("div",T,[r("div",_,[r(k,{height:o(m),width:o(g),onSubmit:y,onChange:u,onSave:d},null,8,["height","width"])]),G])]))}});L.__scopeId="data-v-e8662376";const N={class:"h-full text-center  m-0 p-0",style:{"min-height":"300px"}};const W=f(e({setup:e=>(e,t)=>(n(),h("div",N,[r(L)]))}));W.use(y),W.mount("#app");