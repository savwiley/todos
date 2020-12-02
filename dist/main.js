(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","overlay");const n=document.createElement("div");n.setAttribute("id","overlay");const i=document.createElement("form");i.setAttribute("id","newForm");const d=document.createElement("label");d.setAttribute("for","formTitle"),d.innerHTML="Title: ",i.appendChild(d);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","formTitle"),i.appendChild(r);const c=document.createElement("label");c.setAttribute("for","formDesc"),c.innerHTML="Description: ",i.appendChild(c);const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","desc"),u.setAttribute("id","formDesc"),i.appendChild(u);const o=document.createElement("label");o.setAttribute("for","formDueDate"),o.innerHTML="Due Date: ",i.appendChild(o);const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","dueDate"),l.setAttribute("id","formDueDate"),i.appendChild(l);const s=document.createElement("label");s.setAttribute("for","formPriority"),s.innerHTML="Priority: ",i.appendChild(s);const a=document.createElement("select");a.setAttribute("name","priority"),a.setAttribute("id","priority"),i.appendChild(a);const m=document.createElement("option");m.setAttribute("value","low"),m.innerHTML="Low",a.appendChild(m);const p=document.createElement("option");p.setAttribute("value","medium"),p.innerHTML="Medium",a.appendChild(p);const b=document.createElement("option");b.setAttribute("value","high"),b.innerHTML="High",a.appendChild(b);const A=document.createElement("input");function y(){document.getElementById("formTitle").value="",document.getElementById("formDesc").value="",document.getElementById("formTitle").placeholder="",document.getElementById("formDesc").placeholder="",document.querySelector(".overlay").style.display="block",document.getElementById("subBtn")&&document.getElementById("subBtn").remove();const e=document.getElementById("newForm"),t=document.createElement("input");t.setAttribute("type","button"),t.setAttribute("value","Submit"),t.setAttribute("id","subBtn"),t.addEventListener("click",h),e.appendChild(t)}function h(){new E(r.value,u.value,l.value,a.value)}A.setAttribute("type","button"),A.setAttribute("value","Cancel"),A.setAttribute("id","cancelBtn"),A.addEventListener("click",(()=>{document.querySelector(".overlay").style.display="none"})),i.appendChild(A),n.appendChild(i),t.appendChild(n),e.appendChild(t);let v=[];function E(e,t,n,i){return this.title=e,this.desc=t,this.dueDate=n,this.priorty=i,v.push({title:e,desc:t,dueDate:n,priority:i}),function(){const d=document.querySelector("#content"),r=document.createElement("div");r.setAttribute("class","card"),r.setAttribute("id",v.length);const c=document.createElement("div");c.setAttribute("id","Title"),c.setAttribute("class",`titleIndex${v.length}`),c.textContent=e,r.appendChild(c);const u=document.createElement("div");u.setAttribute("id","Desc"),u.setAttribute("class",`descIndex${v.length}`),u.textContent=t,r.appendChild(u);const o=document.createElement("div");o.setAttribute("id","DueDate"),o.setAttribute("class",`dateIndex${v.length}`),o.textContent=n,r.appendChild(o);const l=document.createElement("div");l.setAttribute("id","Priority"),l.setAttribute("class",`priIndex${v.length}`),l.textContent=i,r.appendChild(l);const s=document.createElement("input");s.setAttribute("id","delete"),s.setAttribute("type","button"),s.setAttribute("value","X"),s.addEventListener("click",(function(){r.remove()})),r.appendChild(s);const a=document.createElement("input");a.setAttribute("id","edit"),a.setAttribute("type","button"),a.setAttribute("value","edit"),a.addEventListener("click",(()=>{!function(e){y();const t=document.querySelector(`.titleIndex${e}`),n=document.querySelector(`.descIndex${e}`),i=document.querySelector(`.dateIndex${e}`),d=document.querySelector(`.priIndex${e}`),r=document.getElementById("formTitle");r.setAttribute("placeholder",t.textContent);const c=document.getElementById("formDesc");c.setAttribute("placeholder",n.textContent);const u=document.getElementById("formDueDate"),o=document.getElementById("priority");document.getElementById("edBtn")&&document.getElementById("edBtn").remove();const l=document.querySelector("#subBtn");l.setAttribute("value","Edit"),l.removeEventListener("click",h),l.addEventListener("click",(()=>{v[e-1].title=r.value,t.textContent=r.value,v[e-1].desc=c.value,n.textContent=c.value,v[e-1].dueDate=u.value,i.textContent=u.value,v[e-1].priority=o.value,d.textContent=o.value})),document.getElementById("newForm").appendChild(l)}(r.getAttribute("id"))})),r.appendChild(a);const m=document.createElement("input");m.setAttribute("id","complete"),m.setAttribute("type","checkbox"),m.addEventListener("change",(()=>{m.checked?(r.removeAttribute("class"),r.setAttribute("class","cardDone")):(r.removeAttribute("class"),r.setAttribute("class","card"))})),r.appendChild(m),d.appendChild(r)}()}new E("title","desc","dueDate","priority"),new E("Sup","Yo","15","high"),new E("Yep","Yo","15","high"),function(){const e=document.querySelector("#content"),t=document.createElement("input");t.setAttribute("id","newCard"),t.setAttribute("type","button"),t.setAttribute("value","New To-Do"),t.addEventListener("click",y),e.appendChild(t)}()})();