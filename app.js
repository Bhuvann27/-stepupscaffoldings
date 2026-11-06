(function(){var C=window.STEPUP,wa=function(t){return"https://wa.me/91"+C.PHONE+"?text="+encodeURIComponent(t)};
var ig=document.getElementById("ig");if(C.INSTAGRAM){ig.href=C.INSTAGRAM;ig.hidden=false}
document.getElementById("est").addEventListener("submit",function(e){e.preventDefault();var f=e.target,v=function(n){return parseFloat(f[n].value)},o=document.getElementById("estOut"),l=v("l"),w=v("w"),h=v("h");
if(!(l>0&&w>0&&h>0)){o.textContent="Please enter length, width and height.";return}
var s=+f.e.value,p=2*(l+w),len=s==4?p:s==3?p-Math.min(l,w):s==2?l+w:Math.max(l,w),a=Math.round(len*h);
o.innerHTML="Indicative coverage: about <b>"+a.toLocaleString("en-IN")+" sq ft</b>. This is a preliminary figure only; real quantity depends on geometry, bays, lifts, openings, ground and safety needs. <a class='btn sm' href='"+wa("Hi StepUp, I need scaffolding. Building "+l+"x"+w+" ft, height "+h+" ft, "+s+" side(s). Estimate ~"+a+" sq ft. Please call me.")+"'>Send to StepUp on WhatsApp</a>"})})();
