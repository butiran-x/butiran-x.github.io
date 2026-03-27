(()=>{function n(e,t="320px"){const n=document.getElementById(e);if(!(n instanceof HTMLDivElement))return null;const s={marginTop:"1em",width:t,background:"var(--box-bg)",border:"0 solid var(--border)",display:"flex",height:"180px"};return Object.assign(n.style,s),n}var e=[],t=[];function s(e){const n=e.getBoundingClientRect(),t=window.devicePixelRatio||1;e.width=n.width*t,e.height=n.height*t;const s=e.getContext("2d");s.scale(t,t)}function o(e,t={}){let n=document.createElement("div");Object.assign(n.style,t);for(let s of e){let t=document.createElement("textarea");t.style.flex="1",t.id=s,t.placeholder=s,t.style.fontFamily="monospace",n.append(t)}return n}function i(e,t={},n=a){let s=document.createElement("div");Object.assign(s.style,t);for(let n of e){let t=document.createElement("button");t.innerHTML=n,t.style.flex="1",s.append(t)}return s.addEventListener("click",e=>{n(e)}),s}function a(n){const s=n.target.closest("button");if(s.innerHTML=="wipe"&&(e[0].value="",e[1].value=""),s.innerHTML=="data"){let t="";t+=`0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;1;1;0;0;0;0
`,t+=`0;0;0;1;2;2;1;0;0;0
`,t+=`0;0;0;1;2;2;1;0;0;0
`,t+=`0;0;0;0;1;1;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0
`,t+=`0;0;0;0;0;0;0;0;0;0
`,t+="0;0;0;0;0;0;0;0;0;0",e[0].value=t}if(s.innerHTML=="read"){let n=e[0].value.split(`
`);t=[];for(let s of n){let e=[],o=s.split(";");for(let t of o)e.push(parseInt(t));t.push(e)}e[1].value=t.map(e=>e.join(" ")).join(`
`)}}function r(){const t=document.createElement("div"),a=["agents-input","agents-output"],r={display:"flex",flexDirection:"row",border:"0px solid magenta"},n=o(a,r);e=n.querySelectorAll("textarea");const c=["wipe","data","read","exec"],l={display:"flex",flexDirection:"row",width:"100%",border:"0px solid cyan"},s=i(c,l);return t.style.display="flex",t.style.flexDirection="column",t.style.border="1px solid var(--border)",t.append(n),t.append(s),n.style.flex="6",s.style.flex="1",t}function c(e){const t=e.querySelectorAll("canvas");for(let e of t)s(e)}function l(e){const s=n(e),t=r();s.append(t),c(t)}window._26c99={mount:e=>{l(e)}},(()=>{console.log("[marker] 26c99.js loaded")})()})()