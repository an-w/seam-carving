import{d as t,t as e,r as a,c as l,w as i,a as s,o as n,b as h,e as r,u as o,i as g,f as m,g as d,h as c,p as u,j as p,k as f,l as w,H as v}from"./vendor.0f7ead60.js";const y={class:"flex flex-col items-center w-96 p-5 bg-gray-100 rounded-lg"},x={class:"flex items-center w-60 mb-3 justify-end"},b=r("span",{class:""},"Width",-1),M={class:"flex items-center w-60 mb-3 justify-end"},D=r("span",{class:""},"Height",-1),V={class:"flex items-center mb-3"},z={class:"flex"},H={class:"\n                    w-28\n                    py-1\n                    border\n                    bg-white\n                    border-black\n                    rounded-md\n                    shadow-lg\n                    hover:border-gray-500\n                    hover:text-gray-500\n                    cursor-pointer\n                    mx-2\n                    flex\n                    justify-center\n                "},P=r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[r("path",{d:"M0 0h24v24H0z",fill:"none"}),r("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"})],-1),A=r("span",{class:"ml-2"},"Upload",-1),I=r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff"},[r("path",{d:"M0 0h24v24H0z",fill:"none"}),r("path",{d:"M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"})],-1),C=r("span",{class:"ml-2"},"Resize",-1);var U=t({props:{height:Number,width:Number},emits:["submit","change"],setup(t,{emit:u}){const p=t,{height:f,width:w}=e(p);let v=a(0),U=a(0),j=a(!0),O=l((()=>j.value?"px":"%"));i([f,w],(t=>{j.value=!0,U.value=o(t[0]),v.value=o(t[1])}),{immediate:!0});const F=()=>{v.value=j.value?o(w):100,U.value=j.value?o(f):100},R=()=>{let t=Math.floor(j.value?U.value:U.value/100*o(f)),e=Math.floor(j.value?v.value:v.value/100*o(w));u("submit",{inputHeight:t,inputWidth:e})};return(t,e)=>{const a=s("el-input"),l=s("el-switch");return n(),h("div",y,[r("div",x,[b,r(a,{onFocus:e[1]||(e[1]=t=>t.target.select()),class:"w-32 mx-10 mr-7 ml-3",modelValue:o(v),"onUpdate:modelValue":e[2]||(e[2]=t=>g(v)?v.value=t:v=t),modelModifiers:{number:!0},type:"number"},{append:m((()=>[d(c(o(O)),1)])),_:1},8,["modelValue"])]),r("div",M,[D,r(a,{onFocus:e[3]||(e[3]=t=>t.target.select()),class:"w-32 mx-10 mr-7 ml-3",modelValue:o(U),"onUpdate:modelValue":e[4]||(e[4]=t=>g(U)?U.value=t:U=t),modelModifiers:{number:!0},type:"number"},{append:m((()=>[d(c(o(O)),1)])),_:1},8,["modelValue"])]),r("div",V,[r("span",{class:["w-3",{"font-bold text-lg":!o(j)}]},"%",2),r(l,{class:"text-white mx-3",modelValue:o(j),"onUpdate:modelValue":e[5]||(e[5]=t=>g(j)?j.value=t:j=t),"active-text":"","inactive-text":"","inactive-color":"#2563eb","active-color":"#1e40af",onChange:F},null,8,["modelValue"]),r("span",{class:["w-3",{"font-bold text-lg":o(j)}]},"px",2)]),r("div",z,[r("label",H,[P,A,r("input",{type:"file",accept:"image/*",class:"hidden",onChange:e[6]||(e[6]=t=>u("change",t))},null,32)]),r("button",{class:"w-28 py-1 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-800 mx-2 flex justify-center",onClick:R},[I,C])])])}}});class j{constructor(t,e,a){this.seams=[],this.toGsBuffer=t=>new Uint8ClampedArray(t.map((t=>t.map((t=>[t,t,t,255])))).flat(2)),this.imageData=t,this.width=e,this.height=a,this.energyMap=this.sobel(this.toGsMatrix(t.data,t.width))}async insert(t=!0){let e=this.seams.shift(),[a,l]=t?this.insertVerticalPath(this.imageData.data,this.energyMap,e):this.insertHorizontalPath(this.imageData.data,this.energyMap,e),i=new ImageData(l,this.imageData.width,this.imageData.height);return this.imageData=new ImageData(a,this.imageData.width+ +t,this.imageData.height+ +!t),[this.imageData,i]}async carve(t=!0){let e=t?this.findVerticalPath(this.energyMap):this.findHorizontalPath(this.energyMap),[a,l]=t?this.removeVerticalPath(this.imageData.data,this.energyMap,e):this.removeHorizontalPath(this.imageData.data,this.energyMap,e),i=new ImageData(l,this.imageData.width,this.imageData.height);return this.imageData=new ImageData(a,this.imageData.width-+t,this.imageData.height-+!t),[this.imageData,i]}sobel(t){let e=t.length,a=t[0].length,l=this.create2DMatrix(e,a);t.forEach((t=>{t.push(t[t.length-1]),t.unshift(t[0])})),t.push(t[t.length-1]),t.unshift(t[0]);for(let i=0;i<e;++i)for(let e=0;e<a;++e){const a=-t[i][e]+t[i+2][e]-2*t[i][e+1]+2*t[i+2][e+1]-t[i][e+2]+t[i+2][e+2],s=-t[i][e]+t[i][e+2]-2*t[i+1][e]+2*t[i+1][e+2]-t[i+2][e]+t[i+2][e+2];l[i][e]=Math.sqrt(a**2+s**2)}return l}toGsMatrix(t,e){let a=[];for(let l=0;l<t.length;l+=4*e){let i=[];for(let a=0;a<4*e;a+=4){let e=t.slice(l+a,l+a+4);i.push((e[0]+e[1]+e[2])/3)}a.push(i)}return a}findVerticalPath(t){let e=this.copyMatrix(t),a=t.length,l=t[0].length;for(let n=1;n<a;++n)for(let t=0;t<l;++t){let a=0!==t?e[n-1][t-1]:e[n-1][t],i=t!==l-1?e[n-1][t+1]:e[n-1][t];e[n][t]+=Math.min(a,e[n-1][t],i)}let i=e[a-1].indexOf(Math.min(...e[a-1])),s=[i];for(let n=a-2;n>=0;--n){let t=0!==i?e[n][i-1]:1/0,a=i!==l-1?e[n][i+1]:1/0,h=[t,e[n][i],a];i+=h.indexOf(Math.min(...h))-1,s.unshift(i)}return s}findHorizontalPath(t){let e=this.copyMatrix(t),a=t.length,l=t[0].length;for(let h=1;h<l;++h)for(let t=0;t<a;++t){let l=0!==t?e[t-1][h-1]:e[t][h-1],i=t!==a-1?e[t+1][h-1]:e[t][h-1];e[t][h]+=Math.min(l,e[t][h-1],i)}let i=e.map((t=>t[l-1])),s=i.indexOf(Math.min(...i)),n=[s];for(let h=l-2;h>=0;--h){let t=0!==s?e[s-1][h]:1/0,l=s!==a-1?e[s+1][h]:1/0,i=[t,e[s][h],l];s+=i.indexOf(Math.min(...i))-1,n.unshift(s)}return n}async initVerticalInsertion(t){let e=this.copyMatrix(this.energyMap),a=[...Array(e.length)].map((a=>[...Array(e[0].length+t)].map(((t,e)=>e))));for(let l=0;l<t;++l){let t=this.findVerticalPath(e);this.seams.push(t.map(((t,e)=>a[e][t])));for(let l=0;l<t.length;++l)e[l].splice(t[l],1),a[l].splice(t[l],2);await new Promise((t=>setTimeout(t,0)))}}async initHorizontalInsertion(t){let e=this.copyMatrix(this.energyMap),a=[...Array(e.length+2*t)].map(((t,a)=>[...Array(e[0].length)].map((()=>a))));for(let l=0;l<t;++l){let i=this.findHorizontalPath(e);this.seams.push(i.map(((t,e)=>a[t][e])));for(let t=0;t<i.length;++t){for(let a=i[t];a<e.length-1;++a)e[a][t]=e[a+1][t];for(let e=i[t];e<a.length-2;++e)a[e][t]=a[e+2][t]}e.pop(),a.pop(),a.pop(),l==t-1&&console.log("ddd",a),await new Promise((t=>setTimeout(t,0)))}}removeVerticalPath(t,e,a){let l=new Uint8ClampedArray(t.length-4*a.length),i=new Uint8ClampedArray(t.length);i.set(t);let s=4*e[0].length,n=s-4;for(let h=0;h<a.length;++h){e[h].splice(a[h],1);let r=t.slice(h*s,h*s+4*a[h]),o=t.slice(h*s+4*a[h]+4,(h+1)*s);l.set(r,h*n),l.set(o,h*n+4*a[h]);let g=h*s+4*a[h]+4;i[g]=255,i[g+1]=0,i[g+2]=0,i[g+3]=255}return[l,i]}insertVerticalPath(t,e,a){let l=new Uint8ClampedArray(t.length+4*a.length),i=new Uint8ClampedArray(t.length);i.set(t);let s=4*e[0].length,n=s+4;for(let h=0;h<a.length;++h){e[h].splice(a[h],0,a[h]);let r=t.slice(h*s,h*s+4*a[h]),o=t.slice(h*s+4*a[h]-4,(h+1)*s+4);l.set(r,h*n),l.set(o,h*n+4*a[h]);let g=h*s+4*a[h]+4;i[g]=255,i[g+1]=0,i[g+2]=0,i[g+3]=255}return[l,i]}insertHorizontalPath(t,e,a){let l=new Uint8ClampedArray(t.length+4*a.length);l.set(t.subarray(0,t.length));let i=new Uint8ClampedArray(t.length);i.set(t);let s=4*e[0].length,n=e.length+1;e.push(e[e.length-1]);for(let h=0;h<a.length;++h){for(let i=n-1;i>a[h];--i)e[i][h]=e[i-1][h],l[i*s+4*h]=t[i*s+4*h-s],l[i*s+4*h+1]=t[i*s+4*h-s+1],l[i*s+4*h+2]=t[i*s+4*h-s+2],l[i*s+4*h+3]=t[i*s+4*h-s+3];i[a[h]*s+4*h]=255,i[a[h]*s+4*h+1]=0,i[a[h]*s+4*h+2]=0,i[a[h]*s+4*h+3]=255}return[l,i]}removeHorizontalPath(t,e,a){let l=new Uint8ClampedArray(t.length-4*a.length);l.set(t.subarray(0,t.length-4*a.length));let i=new Uint8ClampedArray(t.length);i.set(t);let s=4*e[0].length,n=e.length-1;for(let h=0;h<a.length;++h){for(let i=a[h];i<n;++i)e[i][h]=e[i+1][h],l[i*s+4*h]=t[i*s+4*h+s],l[i*s+4*h+1]=t[i*s+4*h+s+1],l[i*s+4*h+2]=t[i*s+4*h+s+2],l[i*s+4*h+3]=t[i*s+4*h+s+3];i[a[h]*s+4*h]=255,i[a[h]*s+4*h+1]=0,i[a[h]*s+4*h+2]=0,i[a[h]*s+4*h+3]=255}return e.pop(),[l,i]}copyMatrix(t){return t.map((t=>[...t]))}create2DMatrix(t,e){return[...Array(t)].map((t=>Array(e)))}}u("data-v-719053a4");const O={class:"h-full",direction:"vertical"},F=r("div",{class:"text-5xl mb-10 mt-5 font-bold"}," Seam Carving ",-1),R={class:"text-center"},S={class:"flex justify-center"},T=r("canvas",{class:"img-canvas mt-5 mx-auto",style:{}},null,-1);p();var _=t({setup(t){let e,l,i,s=a(""),g=a(0),m=a(0);a([]),f((()=>{e=document.querySelector(".img-canvas"),l=e.getContext("2d"),p("/seam-carving-js/assets/dali.af640232.png")}));const d=t=>{console.log("file changed",t);let e=new FileReader;e.readAsDataURL(t.target.files[0]),e.onload=t=>{t.target.readyState===FileReader.DONE&&p(t.target.result)}},c=async(t=100,a=!0)=>{a?i.initVerticalInsertion(t):i.initHorizontalInsertion(t);for(let s=0;s<t;++s){const[t,s]=await i.insert(a);l.putImageData(s,0,0),await new Promise((t=>setTimeout(t,30))),e.width=t.width,e.height=t.height,l.putImageData(t,0,0)}},u=async(t=100,a=!0)=>{for(let s=0;s<Math.abs(t);++s){const[t,s]=await i.carve(a);l.putImageData(s,0,0),await new Promise((t=>setTimeout(t,30))),e.width=t.width,e.height=t.height,l.putImageData(t,0,0)}},p=t=>{const a=new Image;a.src=t,a.crossOrigin="Anonymous",a.onload=()=>{s.value=t,e.width=a.width,e.height=a.height,g.value=a.width,m.value=a.height,l.drawImage(a,0,0),a.style.display="none",i=new j(l.getImageData(0,0,e.width,e.height),e.width,e.height)}},w=async({inputHeight:t,inputWidth:a})=>{console.log("size just changed",t,a),a>g.value?await c(a-g.value,!0):await u(g.value-a,!0),t>m.value?await c(t-m.value,!1):await u(m.value-t,!1),g.value=e.width,m.value=e.height};return(t,e)=>(n(),h("div",O,[F,r("div",R,[r("div",S,[r(U,{height:o(m),width:o(g),onSubmit:w,onChange:d},null,8,["height","width"])]),T])]))}});_.__scopeId="data-v-719053a4";const k={class:"h-full text-center  m-0 p-0"};const B=w(t({setup:t=>(t,e)=>(n(),h("div",k,[r(_)]))}));B.use(v),B.mount("#app");
