(()=>{var e,n,s,o,a,r,c,l,d,u,h,m,p,g,v,b,j,_,w,O,x,C,E,k,A,S,M,L,B,V;function F(){var e="";e+=`# Step
`,e+=`SSTP 0.0100
`,e+=`
`,e+=`# Iteration
`,e+=`TPRC 100
`,e+=`
`,e+=`# Coordinates
`,e+=`RORG 2 1 1
`,e+=`RMIN -1 -1 -1
`,e+=`RMAX 21 21 21
`,e+=`
`,e+=`# Segments
`,e+=`0.0000 0.0000 15.000 #f00
`,e+=`0.0000 0.2500 3.1416 #00f
`,e+=`0.2500 0.2500 9.0000 #f00
`,e+=`0.2500 0.3750 3.1416 #00f
`,e+=`0.3750 0.3750 4.0000 #f00
`,e+=`0.3750 0.5000 4.7124 #00f
`,e+=`0.5000 0.5000 2.0000 #f00
`,e+=`0.5000 0.7500 3.1416 #00f
`,e+=`0.7500 0.7500 7.0000 #f00
`,e+=`0.7500 1.0000 1.5708 #00f
`,e+=`0.0000 0.0000 4.0000 #f00
`,e+=`0.0000 -0.250 3.1416 #00f
`,e+=`-0.250 -0.250 4.0000 #f00
`,e+=`-0.250 -0.500 1.5708 #00f
`,e+=`-0.500 -0.500 8.0000 #f00
`,e+=`0.5000 0.0000 6.2832 #00f
`,e+=`0.0000 0.2500 1.5708 #f00
`,e+=`0.2500 0.2500 9.5000 #00f
`,e+=`0.2500 0.7500 7.5398 #f00
`,e+=`0.7500 0.7500 3.0000 #00f
`,e+=`0.7500 1.0000 1.5708 #f00
`,e+=`0.0000 -0.500 3.1416 #00f
`,e+=`0.5000 0.7500 1.5708 #f00
`,e+=`0.7500 0.7500 3.0000 #00f
`,e+=`0.7500 0.7500 4.9000 #f00
`,e+=`0.7500 1.0000 1.5708 #00f
`,k=e,p=4}function T(){I(n),t(k).to(n)}function z(){_=f("SSTP").from(n),A=f("TPRC").from(n);var e=f("RMIN").from(n),t=f("RMAX").from(n),o=f("RORG").from(n);h=e.x,x=e.y,V=e.z,d=t.x,ymax=t.y,B=t.z,u=0,g=s.width,v=s.height,j=0,M=-1,L=1,C=D("# Segments").from(n),l=0,S=C.length,w=o.x,O=o.y,m=[],b=[]}function D(){var e=arguments[0],t={from:function(){for(var n,i,r,c=arguments[0],s=c.value.split(`
`),l=s.length,o=-1,a=-1,t=0;t<l;t++)s[t].indexOf(e)==0&&(o=t+1),s[t].length==0&&t>o&&(a=t-1);for(i=[],t=o;t<=a;t++)n=s[t].split(" "),r=new Path(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2]),n[3]),i.push(r);return i}};return t}function N(id){with(n=document.createElement("textarea"),n.style)overflowY="scroll",width="214px",height="200px";with(e=document.createElement("textarea"),e.style)overflowY="scroll",width="214px",height="200px";with(r=document.createElement("button"),r)innerHTML="Load",id="Load",style.width="55px",disabled=!1,addEventListener("click",y);with(a=document.createElement("button"),a)innerHTML="Read",id="Read",style.width="55px",disabled=!0,addEventListener("click",y);with(o=document.createElement("button"),o)innerHTML="Start",id="Start",style.width="55px",disabled=!0,addEventListener("click",y);with(c=document.createElement("button"),c)innerHTML="Info",id="Info",style.width="55px",disabled=!1,addEventListener("click",y);with(s=document.createElement("canvas"),s.width="439",s.height="439",s.style)width=s.width+"px",height=s.height+"px";var dvRight,dvLeft=document.createElement("div");with(dvLeft.style)width="220px",height="442px",float="left";with(dvRight=document.createElement("div"),dvRight.style)width="442px",height="442px",float="left";let el=document.getElementById(id);el.append(dvLeft),dvLeft.append(n),dvLeft.append(e),dvLeft.append(r),dvLeft.append(a),dvLeft.append(o),dvLeft.append(c),el.append(dvRight),dvRight.append(s)}function y(){var n,s=event.target.id;switch(s){case"Load":a.disabled=!1,T();break;case"Read":o.disabled=!1,z();break;case"Start":o.innerHTML=="Start"?(r.disabled=!0,a.disabled=!0,c.disabled=!0,o.innerHTML="Stop",E=setInterval(R,A)):(r.disabled=!1,a.disabled=!1,c.disabled=!1,o.innerHTML="Start",clearInterval(E));break;case"Info":n="",n+=`scspg.js
`,n+=`Semi-circle segmented path generator
`,n+=`Sparisoma Viridi
`,n+=`https://github.com/dudung/butiran.js
`,n+=`Load  load parameters
`,n+=`Read  read parameters
`,n+=`Start start generation
`,n+=`Info  show this messages
`,n+=`
`,t(n).to(e);break;default:}}function R(){if(l==0&&(P(s),t(`#s
`).to(e)),t(l+" ").to(e),H(C[l]).onCanvas(s),l>=S-1){r.disabled=!1,a.disabled=!1,o.disabled=!0,c.disabled=!1,o.innerHTML="Start",clearInterval(E),t(`

`).to(e);var n,i,d=m.length;t(`#x      y
`).to(e);for(n=0;n<2;n++)i="",i+=m[n].toFixed(p)+" ",i+=b[n].toFixed(p)+`
`,t(i).to(e);t(`..
`).to(e);for(n=d-2;n<d;n++)i="",i+=m[n].toFixed(p)+" ",i+=b[n].toFixed(p)+`
`,t(i).to(e);t("Lines = "+d+`
`).to(e),t(`
`).to(e)}l++}function P(e){var t=e.width,n=e.height,s=e.getContext("2d");s.clearRect(0,0,t,n)}function H(){var e=arguments[0],t={onCanvas:function(){var n,s,a,r,c,l,f,p,y,C,E,k,A,S,M,F,T,z=arguments[0],t=z.getContext("2d"),o=Transformation.linearTransform;if(e instanceof Grain)y=e.r.x,r=y+e.D,F=e.r.y,n=o(y,[h,d],[u,g]),S=o(r,[h,d],[u,g]),A=S-n,s=o(F,[x,ymax],[v,j]),t.beginPath(),t.strokeStyle=e.c,t.arc(n,s,A,0,2*Math.PI),t.stroke();else if(e instanceof Path){p=e.qi*2*Math.PI,C=e.qf*2*Math.PI,E=e.l,k=e.c,f=Math.floor(E/_),l=p,M=(C-p)/f,c=[],a=[];for(i=0;i<f;i++)r=_*Math.cos(l),w+=r,c.push(w),m.push(w),T=_*Math.sin(l),O+=T,a.push(O),b.push(O),l+=M;t.beginPath(),t.strokeStyle=k;for(i=0;i<f;i++)n=o(c[i],[h,d],[u,g]),s=o(a[i],[x,ymax],[v,j]),i==0?t.moveTo(n,s):t.lineTo(n,s);t.stroke(),t.beginPath(),n=o(c[0],[h,d],[u,g]),s=o(a[0],[x,ymax],[v,j]),t.strokeStyle="#880",t.arc(n,s,3,0,2*Math.PI),t.stroke()}}};return t}function I(){var e=arguments[0];e.value=""}function t(){var e=arguments[0],t={to:function(){var t=arguments[0];t.value+=e,t.scrollTop=t.scrollHeight}};return t}function f(){var e=arguments[0],t={from:function(){for(var t,s,o,a=arguments[0],i=a.value.split(`
`),r=i.length,n=0;n<r;n++)if(t=i[n].split(" "),s=t.length,t[0].indexOf(e)==0)return s==2?o=parseFloat(t[1]):s==4&&(o=new Vect3(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]))),o}};return t}function $(e){let t=document.getElementById(e);t.style.border="0px solid red",t.style.marginTop="1em",t.style.marginBottom="1em",t.style.height="450px",F(),N(e)}window._26c76={mount:e=>{$(e)}},(()=>{console.log("[marker] 26c76.js loaded")})()})()