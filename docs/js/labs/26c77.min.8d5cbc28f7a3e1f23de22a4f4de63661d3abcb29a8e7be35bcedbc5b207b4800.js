(()=>{var e,t,s,o,i,a,r,c,l,d,h,m,p,g,v,b,j,y,_,w,O,x,C,E,k,A,S,M,F,L,B,V;function T(){var e="";e+=`# Environment
`,e+=`BFLD 0.0000 0.0000 -2.0000
`,e+=`
`,e+=`# Particle
`,e+=`MASS 0.1000
`,e+=`CHRG 3.1415
`,e+=`DIAM 0.001
`,e+=`POST 0.0159 0.0000 0.0000
`,e+=`VELO 0.0000 1.0000 0.0000
`,e+=`
`,e+=`# Iteration
`,e+=`TBEG 0.0000
`,e+=`TEND 0.1000
`,e+=`TSTP 0.0001
`,e+=`TDAT 0.0020
`,e+=`TPRC 1
`,e+=`
`,e+=`# Coordinates
`,e+=`RMIN -0.020 -0.020 -0.020
`,e+=`RMAX +0.020 +0.020 +0.020
`,e+=`
`,e+=`# Method
`,e+=`CORV 0
`,O=e,p=4}function z(){I(t),u(O).to(t)}function D(){var o,i,a=n("BFLD").from(t),r=n("MASS").from(t),c=n("CHRG").from(t),u=n("DIAM").from(t),f=n("POST").from(t),p=n("VELO").from(t);j=n("TBEG").from(t),S=n("TEND").from(t),l=n("TSTP").from(t),A=n("TDAT").from(t),k=n("TPRC").from(t),o=n("RMIN").from(t),i=n("RMAX").from(t),w=n("CORV").from(t),d=0,x=Math.floor(A/l),b=o.x,M=o.y,V=o.z,_=i.x,ymax=i.y,F=i.z,h=j,e=new Grain,e.m=r,e.q=c,e.D=u,e.r=f,e.v=p,e.c="#f00",m=new Magnetic,m.setField(a),v=0,y=s.width,C=s.height,E=0,B=-1,L=1}function N(id){with(t=document.createElement("textarea"),t.style)overflowY="scroll",width="214px",height="200px";with(a=document.createElement("textarea"),a.style)overflowY="scroll",width="214px",height="200px";with(r=document.createElement("button"),r)innerHTML="Load",id="Load",style.width="55px",disabled=!1,addEventListener("click",f);with(i=document.createElement("button"),i)innerHTML="Read",id="Read",style.width="55px",disabled=!0,addEventListener("click",f);with(o=document.createElement("button"),o)innerHTML="Start",id="Start",style.width="55px",disabled=!0,addEventListener("click",f);with(c=document.createElement("button"),c)innerHTML="Info",id="Info",style.width="55px",disabled=!1,addEventListener("click",f);with(s=document.createElement("canvas"),s.width="439",s.height="439",s.style)width=s.width+"px",height=s.height+"px";var dvRight,dvLeft=document.createElement("div");with(dvLeft.style)width="220px",height="442px",float="left";with(dvRight=document.createElement("div"),dvRight.style)width="442px",height="442px",float="left";let el=document.getElementById(id);el.append(dvLeft),dvLeft.append(t),dvLeft.append(a),dvLeft.append(r),dvLeft.append(i),dvLeft.append(o),dvLeft.append(c),el.append(dvRight),dvRight.append(s)}function f(){var e,t=event.target.id;switch(t){case"Load":i.disabled=!1,z();break;case"Read":o.disabled=!1,D();break;case"Start":o.innerHTML=="Start"?(r.disabled=!0,i.disabled=!0,c.disabled=!0,o.innerHTML="Stop",g=setInterval(R,k)):(r.disabled=!1,i.disabled=!1,c.disabled=!1,o.innerHTML="Start",clearInterval(g));break;case"Info":e="",e+=`cppcmf.js
`,e+="Charged particle in perpendicular ",e+=`constant magnetic field
`,e+=`Sparisoma Viridi
`,e+=`https://github.com/dudung/butiran.js
`,e+=`Load  load parameters
`,e+=`Read  read parameters
`,e+=`Start start simulation
`,e+=`Info  show this messages
`,e+=`
`,u(e).to(a);break;default:}}function R(){if(d>=x&&(d=0),h==j&&u(`#t      x       y
`).to(a),d==0){var t,n,f,v,b,y=h.toFixed(p),_=e.r.x.toFixed(p),O=e.r.y.toFixed(p),C=y+" "+_+" "+O;u(C+`
`).to(a)}n=m.force(e),f=n,v=Vect3.div(f,e.m),e.v=Vect3.add(e.v,Vect3.mul(v,l)),w!=0&&(t=e.q*m.B.len()*l/e.m,b=1/(1+t*t)**.5,e.v=Vect3.mul(e.v,b)),e.r=Vect3.add(e.r,Vect3.mul(e.v,l)),P(s),H(e).onCanvas(s),h>=S&&(r.disabled=!1,i.disabled=!1,o.disabled=!0,c.disabled=!1,o.innerHTML="Start",clearInterval(g),u(`
`).to(a)),d++,h+=l}function P(e){var t=e.width,n=e.height,s=e.getContext("2d");s.clearRect(0,0,t,n)}function H(){var e=arguments[0],t={onCanvas:function(){var i=arguments[0],t=i.getContext("2d"),s=e.r.x,a=s+e.D,r=e.r.y,n=Transformation.linearTransform,o=n(s,[b,_],[v,y]),c=n(a,[b,_],[v,y]),l=c-o,d=n(r,[M,ymax],[C,E]);t.beginPath(),t.strokeStyle=e.c,t.arc(o,d,l,0,2*Math.PI),t.stroke()}};return t}function I(){var e=arguments[0];e.value=""}function u(){var e=arguments[0],t={to:function(){var t=arguments[0];t.value+=e,t.scrollTop=t.scrollHeight}};return t}function n(){var e=arguments[0],t={from:function(){for(var t,s,o,a=arguments[0],i=a.value.split(`
`),r=i.length,n=0;n<r;n++)if(t=i[n].split(" "),s=t.length,t[0].indexOf(e)==0)return s==2?o=parseFloat(t[1]):s==4&&(o=new Vect3(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]))),o}};return t}function $(e){let t=document.getElementById(e);t.style.border="0px solid red",t.style.marginTop="1em",t.style.marginBottom="1em",t.style.height="450px",T(),N(e)}window._26c77={mount:e=>{$(e)}},(()=>{console.log("[marker] 26c77.js loaded")})()})()