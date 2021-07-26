import{d as e,t,r as a,c as l,w as i,a as s,o as n,b as r,e as h,u as o,i as d,f as u,g as m,h as g,j as c,k as p,H as f}from"./vendor.a6b09ccc.js";const v={class:"flex flex-col items-center w-96 p-5 bg-gray-100 rounded-lg"},w={class:"flex items-center w-60 mb-3 justify-end"},x=h("span",{class:""},"Width",-1),b={class:"flex items-center w-60 mb-3 justify-end"},y=h("span",{class:""},"Height",-1),M={class:"flex items-center mb-3"},D={class:"flex"},V={class:"w-24 py-1 border bg-white border-black rounded-md shadow-lg hover:border-gray-500 hover:text-gray-500 cursor-pointer mx-2"},C=h("span",{class:"mt-2 text-base leading-normal"},"Upload",-1);var P=e({props:{height:Number,width:Number},emits:["submit","change"],setup(e,{emit:c}){const p=e,{height:f,width:P}=t(p);let U=a(0),A=a(0),H=a(!0),I=l((()=>H.value?"px":"%"));i([f,P],(e=>{H.value=!0,A.value=o(e[0]),U.value=o(e[1])}),{immediate:!0});const j=()=>{U.value=H.value?o(P):100,A.value=H.value?o(f):100},z=()=>{let e=Math.floor(H.value?A.value:A.value/100*o(f)),t=Math.floor(H.value?U.value:U.value/100*o(P));c("submit",{inputHeight:e,inputWidth:t})};return(e,t)=>{const a=s("el-input"),l=s("el-switch");return n(),r("div",v,[h("div",w,[x,h(a,{class:"w-32 mx-10 mr-7 ml-3",modelValue:o(U),"onUpdate:modelValue":t[1]||(t[1]=e=>d(U)?U.value=e:U=e),modelModifiers:{number:!0},type:"number"},{append:u((()=>[m(g(o(I)),1)])),_:1},8,["modelValue"])]),h("div",b,[y,h(a,{class:"w-32 mx-10 mr-7 ml-3",modelValue:o(A),"onUpdate:modelValue":t[2]||(t[2]=e=>d(A)?A.value=e:A=e),modelModifiers:{number:!0},type:"number"},{append:u((()=>[m(g(o(I)),1)])),_:1},8,["modelValue"])]),h("div",M,[h("span",{class:["w-3",{"font-bold text-lg":!o(H)}]},"%",2),h(l,{class:"text-white mx-3",modelValue:o(H),"onUpdate:modelValue":t[3]||(t[3]=e=>d(H)?H.value=e:H=e),"active-text":"","inactive-text":"","inactive-color":"#2563eb","active-color":"#1e40af",onChange:j},null,8,["modelValue"]),h("span",{class:["w-3",{"font-bold text-lg":o(H)}]},"px",2)]),h("div",D,[h("label",V,[C,h("input",{type:"file",accept:"image/*",class:"hidden",onChange:t[4]||(t[4]=e=>c("change",e))},null,32)]),h("button",{class:"w-24 py-1 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-800 mx-2",onClick:z}," Resize ")])])}}});class U{constructor(e,t,a){this.toGsBuffer=e=>new Uint8ClampedArray(e.map((e=>e.map((e=>[e,e,e,255])))).flat(2)),this.imageData=e,this.width=t,this.height=a,this.gsMatrix=this.sobel(this.toGsMatrix(e.data,e.width))}carve(e=!0){let t=e?this.findVerticalPath(this.gsMatrix):this.findHorizontalPath(this.gsMatrix),[a,l]=e?this.removeVerticalPath(this.imageData.data,this.gsMatrix,t):this.removeHorizontalPath(this.imageData.data,this.gsMatrix,t),i=new ImageData(l,this.imageData.width,this.imageData.height);return this.imageData=new ImageData(a,this.imageData.width-+e,this.imageData.height-+!e),Promise.resolve([this.imageData,i])}sobel(e){let t=e.length,a=e[0].length,l=this.create2DMatrix(t,a);e.forEach((e=>{e.push(e[e.length-1]),e.unshift(e[0])})),e.push(e[e.length-1]),e.unshift(e[0]);for(let i=0;i<t;++i)for(let t=0;t<a;++t){const a=-e[i][t]+e[i+2][t]-2*e[i][t+1]+2*e[i+2][t+1]-e[i][t+2]+e[i+2][t+2],s=-e[i][t]+e[i][t+2]-2*e[i+1][t]+2*e[i+1][t+2]-e[i+2][t]+e[i+2][t+2];l[i][t]=Math.sqrt(a**2+s**2)}return l}toGsMatrix(e,t){let a=[];for(let l=0;l<e.length;l+=4*t){let i=[];for(let a=0;a<4*t;a+=4){let t=e.slice(l+a,l+a+4);i.push((t[0]+t[1]+t[2])/3)}a.push(i)}return a}findVerticalPath(e){let t=this.copyMatrix(e),a=e.length,l=e[0].length;for(let n=1;n<a;++n)for(let e=0;e<l;++e){let a=0!==e?t[n-1][e-1]:t[n-1][e],i=e!==l-1?t[n-1][e+1]:t[n-1][e];t[n][e]+=Math.min(a,t[n-1][e],i)}let i=t[a-1].indexOf(Math.min(...t[a-1])),s=[i];for(let n=a-2;n>=0;--n){let e=0!==i?t[n][i-1]:1/0,a=i!==l-1?t[n][i+1]:1/0,r=[e,t[n][i],a];i+=r.indexOf(Math.min(...r))-1,s.unshift(i)}return s}findHorizontalPath(e){let t=this.copyMatrix(e),a=e.length,l=e[0].length;for(let r=1;r<l;++r)for(let e=0;e<a;++e){let l=0!==e?t[e-1][r-1]:t[e][r-1],i=e!==a-1?t[e+1][r-1]:t[e][r-1];t[e][r]+=Math.min(l,t[e][r-1],i)}let i=t.map((e=>e[l-1])),s=i.indexOf(Math.min(...i)),n=[s];for(let r=l-2;r>=0;--r){let e=0!==s?t[s-1][r]:1/0,l=s!==a-1?t[s+1][r]:1/0,i=[e,t[s][r],l];s+=i.indexOf(Math.min(...i))-1,n.unshift(s)}return n}removeVerticalPath(e,t,a){let l=new Uint8ClampedArray(e.length-4*a.length),i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=s-4;for(let r=0;r<a.length;++r){t[r].splice(a[r],1);let h=e.slice(r*s,r*s+4*a[r]),o=e.slice(r*s+4*a[r]+4,(r+1)*s);l.set(h,r*n),l.set(o,r*n+4*a[r]);let d=r*s+4*a[r]+4;i[d]=255,i[d+1]=0,i[d+2]=0,i[d+3]=255}return[l,i]}removeHorizontalPath(e,t,a){let l=new Uint8ClampedArray(e.length-4*a.length);l.set(e.subarray(0,e.length-4*a.length));let i=new Uint8ClampedArray(e.length);i.set(e);let s=4*t[0].length,n=t.length-1;for(let r=0;r<a.length;++r){for(let i=a[r];i<n;++i)t[i][r]=t[i+1][r],l[i*s+4*r]=e[i*s+4*r+s],l[i*s+4*r+1]=e[i*s+4*r+s+1],l[i*s+4*r+2]=e[i*s+4*r+s+2],l[i*s+4*r+3]=e[i*s+4*r+s+3];i[a[r]*s+4*r]=255,i[a[r]*s+4*r+1]=0,i[a[r]*s+4*r+2]=0,i[a[r]*s+4*r+3]=255}return t.pop(),[l,i]}copyMatrix(e){return e.map((e=>[...e]))}create2DMatrix(e,t){return[...Array(e)].map((e=>Array(t)))}}const A={class:"h-full",direction:"vertical"},H=h("div",{class:"text-5xl mb-10 font-bold"}," Seam Carving ",-1),I={class:"text-center "},j={class:"flex justify-center"},z=h("canvas",{class:"img-canvas mt-5 mx-auto max-w-full max-h-96",style:{"max-height":"60vh"}},null,-1);var O=e({setup(e){let t,l,i;a("");let s=a(0),d=a(0);a([]),c((()=>{t=document.querySelector(".img-canvas"),l=t.getContext("2d"),g("/assets/chameleon.e4f0381d.png")}));const u=e=>{console.log("file changed",e);let t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=e=>{e.target.readyState===FileReader.DONE&&g(e.target.result)}},m=async(e=100,a=!0)=>{for(let s=0;s<e;++s){const[e,s]=await i.carve(a);l.putImageData(s,0,0),await new Promise((e=>setTimeout(e,0))),t.width=e.width,t.height=e.height,l.putImageData(e,0,0)}},g=e=>{const a=new Image;a.src=e,a.crossOrigin="Anonymous",a.onload=()=>{t.width=a.width,t.height=a.height,s.value=a.width,d.value=a.height,l.drawImage(a,0,0),a.style.display="none",i=new U(l.getImageData(0,0,t.width,t.height),t.width,t.height)}},p=async({inputHeight:e,inputWidth:a})=>{console.log("size just changed",e,a),await m(s.value-a,!0),await m(d.value-e,!1),s.value=t.width,d.value=t.height};return(e,t)=>(n(),r("div",A,[H,h("div",I,[h("div",j,[h(P,{height:o(d),width:o(s),onSubmit:p,onChange:u},null,8,["height","width"])]),z])]))}});const R={class:"h-screen text-center  m-0 p-0"};const S=p(e({setup:e=>(e,t)=>(n(),r("div",R,[h(O)]))}));S.use(f),S.mount("#app");