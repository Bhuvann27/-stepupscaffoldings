(function(){var P="917406886226",wa=function(t){return"https://wa.me/"+P+"?text="+encodeURIComponent(t)};
document.getElementById("est").addEventListener("submit",function(e){e.preventDefault();var f=e.target,v=function(n){return parseFloat(f[n].value)},o=document.getElementById("estOut"),l=v("l"),w=v("w"),h=v("h");
if(!(l>0&&w>0&&h>0)){o.textContent="Please enter length, width and height.";return}
var s=+f.e.value,p=2*(l+w),len=s==4?p:s==3?p-Math.min(l,w):s==2?l+w:Math.max(l,w),a=Math.round(len*h);
o.innerHTML="Indicative coverage: about <b>"+a.toLocaleString("en-IN")+" sq ft</b>. Preliminary only; real quantity depends on geometry, bays, lifts, openings, ground and safety needs.<br><a class='btn sm' href='"+wa("Hi Scaffy, I need scaffolding. Building "+l+"x"+w+" ft, height "+h+" ft, "+s+" side(s). Estimate ~"+a+" sq ft. Please call me.")+"'>Send to Scaffy on WhatsApp</a>"});
var bar=document.getElementById("bar"),pill=document.getElementById("pill"),dlg=document.getElementById("dlg"),ref=document.getElementById("referral"),shown=false;
function mv(e){var r=bar.getBoundingClientRect();bar.style.setProperty("--x",(e.clientX-r.left)+"px");bar.style.setProperty("--y",(e.clientY-r.top)+"px");bar.classList.add("lift")}
function off(){bar.classList.remove("lift")}bar.addEventListener("pointermove",mv);bar.addEventListener("pointerdown",mv);bar.addEventListener("pointerleave",off);bar.addEventListener("pointerup",off);
function check(){var y=scrollY,r=ref.getBoundingClientRect(),inRef=r.top<innerHeight*.7&&r.bottom>0;pill.hidden=!(y>500)||inRef;
if(!shown&&y>innerHeight*1.2&&!inRef){var seen=false;try{seen=sessionStorage.getItem("sc_pop")}catch(x){}if(!seen&&dlg.showModal){shown=true;try{sessionStorage.setItem("sc_pop","1")}catch(x){}dlg.showModal()}}}
addEventListener("scroll",check,{passive:true});
document.getElementById("close").addEventListener("click",function(){dlg.close()});dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});dlg.querySelector("a").addEventListener("click",function(){dlg.close()})})();
(function(){function m(e){var g=e.target.closest&&e.target.closest(".glass:not(.bar)");if(!g)return;var r=g.getBoundingClientRect();g.style.setProperty("--mx",(e.clientX-r.left)+"px");g.style.setProperty("--my",(e.clientY-r.top)+"px");g.classList.add("lit")}
document.addEventListener("pointermove",m,{passive:true});document.addEventListener("pointerdown",m,{passive:true});
document.addEventListener("pointerout",function(e){var g=e.target.closest&&e.target.closest(".glass");if(g&&!g.contains(e.relatedTarget))g.classList.remove("lit")});
document.addEventListener("pointerup",function(e){if(e.pointerType!=="mouse")setTimeout(function(){document.querySelectorAll(".lit").forEach(function(x){x.classList.remove("lit")})},350)})})();
