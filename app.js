(function(){
var C=window.STEPUP;
document.querySelector("[data-contact]").textContent="Phone: "+C.PHONE+" · Email: "+C.EMAIL;
var T="text",F={
enquiry:{title:"Project enquiry",f:[["name","Your name",T,1],["company","Company (optional)",T],["phone","Phone",'tel',1],["whatsapp","WhatsApp number",'tel'],["email","Email",'email'],["location","Project location",T,1],["service","Service needed",["Scaffolding rental","Material supply","Erection","Dismantling","Transportation","Complete solution","Formwork enquiry","Other equipment","Industrial access"],1],["building","Building type",["Residential","Commercial","Industrial","Infrastructure","Institutional"]],["floors","Floors",'number'],["size","Approx length x width x height (ft)",T],["start","Expected start date",'date'],["duration","Estimated rental duration",T],["notes","Notes","area"]]},
partner:{title:"Partner registration",f:[["name","Full name",T,1],["phone","Phone",'tel',1],["whatsapp","WhatsApp number",'tel'],["email","Email (optional)",'email'],["city","City / locality",T,1],["profession","Profession",T,1],["experience","Construction experience",T],["plan","How will you find opportunities?","area"],["contact","Preferred contact",["Call","WhatsApp","Email"]]]},
lead:{title:"Project lead",f:[["referrer","Your name",T,1],["referrer_phone","Your phone",'tel',1],["project","Project name",T],["site","Site location",T,1],["builder","Builder / contractor",T],["contact_person","Contact person",T],["contact_phone","Contact number",'tel'],["type","Project type",T],["floors","Floors (if known)",'number'],["stage","Current stage",T],["need","Scaffolding need",T],["date","Expected requirement date",'date'],["info","Anything else (partial details are fine)","area"]]},
supplier:{title:"Supplier enquiry",f:[["name","Name / company",T,1],["phone","Phone",'tel',1],["email","Email",'email'],["offer","What do you offer?",["Scaffolding inventory","Equipment","Transport","Labour","Other"],1],["details","Quantities, location, terms","area"]]}};
function el(t,a,h){var e=document.createElement(t);for(var k in a)e.setAttribute(k,a[k]);if(h)e.innerHTML=h;return e}
document.querySelectorAll("[data-form]").forEach(function(box){
var k=box.dataset.form,d=F[k],f=el("form",{novalidate:""}),i=0;
d.f.forEach(function(x){var id=k+(i++),l=el("label",{"for":id},x[1]+(x[3]?" *":"")),c;
if(Array.isArray(x[2])){c=el("select",{id:id,name:x[0]},'<option value="">Select</option>'+x[2].map(function(o){return"<option>"+o+"</option>"}).join(""))}
else if(x[2]=="area")c=el("textarea",{id:id,name:x[0],rows:3});else c=el("input",{id:id,name:x[0],type:x[2]});
if(x[3])c.required=true;l.appendChild(c);f.appendChild(l)});
f.appendChild(el("input",{name:"botcheck",class:"hp",tabindex:"-1",autocomplete:"off","aria-hidden":"true"}));
f.appendChild(el("button",{class:"btn",type:"submit"},"Submit"));var m=el("div",{"aria-live":"polite"});f.appendChild(m);box.appendChild(f);
f.addEventListener("submit",function(e){e.preventDefault();m.className="msg";m.textContent="";
if(!f.checkValidity()){f.reportValidity();return}
var o={};new FormData(f).forEach(function(v,n){o[n]=v});if(o.botcheck)return;delete o.botcheck;
var ph=o.phone||o.referrer_phone;if(ph&&!/^[+\d][\d\s-]{8,14}$/.test(ph)){m.className="msg err";m.textContent="Please enter a valid phone number.";return}
if(!C.FORM_ENDPOINT){m.className="msg err";m.textContent="This form is not connected yet, so nothing was sent."+(C.WHATSAPP?" Please message us on WhatsApp instead.":" Please contact us by phone or email.");return}
o.subject="StepUp "+d.title;o.form_type=k;if(C.ACCESS_KEY)o.access_key=C.ACCESS_KEY;
fetch(C.FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)})
.then(function(r){if(!r.ok)throw 0;m.textContent="Thank you. Your submission was received and StepUp will contact you.";f.reset()})
.catch(function(){m.className="msg err";m.textContent="Submission failed. Please try again or contact us directly."})})});
document.getElementById("est").addEventListener("submit",function(e){e.preventDefault();var f=e.target,v=function(n){return parseFloat(f[n].value)},o=document.getElementById("estOut");
var l=v("l"),w=v("w"),h=v("h");if(!(l>0&&w>0&&h>0)){o.textContent="Please enter length, width and height.";return}
var p=2*(l+w),sides=+f.e.value,len=sides==4?p:sides>=3?p-Math.min(l,w):sides==2?l+w:Math.max(l,w),a=Math.round(len*h);
o.innerHTML="Indicative coverage: about <b>"+a.toLocaleString("en-IN")+" sq ft</b> ("+Math.round(len)+" ft run x "+h+" ft). Preliminary only: real quantity depends on geometry, bays, lifts, openings, ground and safety needs. <a href='#enquiry'>Submit for a professional assessment</a>."});
})();
