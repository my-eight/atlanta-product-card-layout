var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_arenda_800(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(800) 351-07-24");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "800 351-07-24");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78003510724');
}

if ((document.querySelector("div.header__city >div") 
&& !(/Краснодар|Адыгея, аул Тугургой|Адыгея, пгт. Яблоновский|Новороссийск|Севастополь/.test(document.querySelector("div.header__city >div").innerText))
&& !(/catalog\/prodazha\//.test(document.location.href)) 
&& !location.href.includes('/sto/'))
|| (/catalog\/arenda\/arenda_dorojnostroitelnoe-oborudovanie/.test(document.location.href)))
{
    ct_ready(ct_repl_arenda_800);
    setTimeout(function() {
        ct_repl_arenda_800();
    }, 200);
    setTimeout(function() {
        ct_repl_arenda_800();
    }, 1500);
    ct_event_listen(['mouseup', 'touchend'], 'ymaps *', function() {
        setTimeout(function() {
            ct_repl_arenda_800();
        }, 200);
        setTimeout(function() {
            ct_repl_arenda_800();
        }, 1500);
        setTimeout(function() {
            ct_repl_arenda_800();
        }, 2500);
    });
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_arenda_krasnodar(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(861) 205-08-56");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "861 205-08-56");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78612050856');
}

if (document.querySelector("div.header__city >div") && (/Краснодар|Адыгея, аул Тугургой|Адыгея, пгт. Яблоновский/.test(document.querySelector("div.header__city >div").innerText)) && 
   (!(/catalog\/prodazha\/|dorojnostroitelnoe-oborudovanie|sto/.test(document.location.href)))) 
{
ct_ready(ct_repl_arenda_krasnodar);

setTimeout(function(){ ct_repl_arenda_krasnodar(); }, 200);
setTimeout(function(){ ct_repl_arenda_krasnodar(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_arenda_krasnodar(); }, 200);
  setTimeout(function(){ ct_repl_arenda_krasnodar(); }, 1500);
  setTimeout(function(){ ct_repl_arenda_krasnodar(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_prodazha_krasnodar(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(861) 205-44-78");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "861 205-44-78");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78612054478');
}

if (document.querySelector("div.header__city >div") && (/Краснодар|Адыгея, аул Тугургой|Адыгея, пгт. Яблоновский/.test(document.querySelector("div.header__city >div").innerText)) && 
   (/catalog\/prodazha\//.test(document.location.href)) && 
   (!/dorojnostroitelnoe-oborudovanie/.test(document.location.href))) 
{
ct_ready(ct_repl_prodazha_krasnodar);

setTimeout(function(){ ct_repl_prodazha_krasnodar(); }, 200);
setTimeout(function(){ ct_repl_prodazha_krasnodar(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_prodazha_krasnodar(); }, 200);
  setTimeout(function(){ ct_repl_prodazha_krasnodar(); }, 1500);
  setTimeout(function(){ ct_repl_prodazha_krasnodar(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_arenda_novorossiysk(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(861) 730-17-56");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "861 730-17-56");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78617301756');
}

if (document.querySelector("div.header__city >div") && (/Новороссийск/.test(document.querySelector("div.header__city >div").innerText)) && 
   (!(/catalog\/prodazha\/|dorojnostroitelnoe-oborudovanie/.test(document.location.href))) && !location.href.includes('/sto/')) 
{
ct_ready(ct_repl_arenda_novorossiysk);

setTimeout(function(){ ct_repl_arenda_novorossiysk(); }, 200);
setTimeout(function(){ ct_repl_arenda_novorossiysk(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_arenda_novorossiysk(); }, 200);
  setTimeout(function(){ ct_repl_arenda_novorossiysk(); }, 1500);
  setTimeout(function(){ ct_repl_arenda_novorossiysk(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_prodazha_novorossiysk(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(861) 730-89-31");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "861 730-89-31");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78617308931');
}

if (document.querySelector("div.header__city >div") && (/Новороссийск/.test(document.querySelector("div.header__city >div").innerText)) && 
   (/catalog\/prodazha\//.test(document.location.href)) && 
   (!/dorojnostroitelnoe-oborudovanie/.test(document.location.href))) 
{
ct_ready(ct_repl_prodazha_novorossiysk);

setTimeout(function(){ ct_repl_prodazha_novorossiysk(); }, 200);
setTimeout(function(){ ct_repl_prodazha_novorossiysk(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_prodazha_novorossiysk(); }, 200);
  setTimeout(function(){ ct_repl_prodazha_novorossiysk(); }, 1500);
  setTimeout(function(){ ct_repl_prodazha_novorossiysk(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_arenda_sevastopol(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(869) 288-71-28");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "869 288-71-28");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78692887128');
}

if (document.querySelector("div.header__city >div") && (/Севастополь/.test(document.querySelector("div.header__city >div").innerText)) && 
   (!(/catalog\/prodazha\/|dorojnostroitelnoe-oborudovanie/.test(document.location.href))) && !location.href.includes('/sto/')) 
{
ct_ready(ct_repl_arenda_sevastopol);

setTimeout(function(){ ct_repl_arenda_sevastopol(); }, 200);
setTimeout(function(){ ct_repl_arenda_sevastopol(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_arenda_sevastopol(); }, 200);
  setTimeout(function(){ ct_repl_arenda_sevastopol(); }, 1500);
  setTimeout(function(){ ct_repl_arenda_sevastopol(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_prodazha_sevastopol(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(869) 288-71-35");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "869 288-71-35");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78692887135');
}

if (document.querySelector("div.header__city >div") && (/Севастополь/.test(document.querySelector("div.header__city >div").innerText)) && 
   (/catalog\/prodazha\//.test(document.location.href)) && 
   (!/dorojnostroitelnoe-oborudovanie/.test(document.location.href))) 
{
ct_ready(ct_repl_prodazha_sevastopol);

setTimeout(function(){ ct_repl_prodazha_sevastopol(); }, 200);
setTimeout(function(){ ct_repl_prodazha_sevastopol(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_prodazha_sevastopol(); }, 200);
  setTimeout(function(){ ct_repl_prodazha_sevastopol(); }, 1500);
  setTimeout(function(){ ct_repl_prodazha_sevastopol(); }, 2500);
});
}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_sto(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(800) 351-20-37");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "800 351-20-37");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78003512037');
}

		if (/atlanta-gk.ru\/sto/.test(document.location.href)) {
ct_ready(ct_repl_sto);
		setTimeout(function(){ ct_repl_sto(); }, 200);
setTimeout(function(){ ct_repl_sto(); }, 1500);

ct_event_listen(['mouseup','touchend'], 'ymaps *', function(){
  setTimeout(function(){ ct_repl_sto(); }, 200);
  setTimeout(function(){ ct_repl_sto(); }, 1500);
  setTimeout(function(){ ct_repl_sto(); }, 2500);
})
		}var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_repl_prodazha_800(){
 ct_repl('body *',/.800..101.10.92|.905..473.17.82/gi, "(800) 333-81-34");
 ct_repl('body *',/905.473.17.82|800.101.10.92/gi, "800 333-81-34");
 ct_repl_a('a[href*="tel:"][href*="101-10-92"], a[href*="tel:"][href*="1011092"], a[href*="tel:"][href*="473-17-82"], a[href*="tel:"][href*="4731782"]','href','tel:+78003338134');
}

if ((document.querySelector("div.header__city >div") 
&& !(/Краснодар|Адыгея, аул Тугургой|Адыгея, пгт. Яблоновский|Новороссийск|Севастополь/.test(document.querySelector("div.header__city >div").innerText)) 
&& (/catalog\/prodazha\//.test(document.location.href))
&& !location.href.includes('/sto/'))
|| (/catalog\/prodazha\/dorojnostroitelnoe-oborudovanie/.test(document.location.href)))
{
    ct_ready(ct_repl_prodazha_800);
    setTimeout(function() {
        ct_repl_prodazha_800();
    }, 200);
    setTimeout(function() {
        ct_repl_prodazha_800();
    }, 1500);
    ct_event_listen(['mouseup', 'touchend'], 'ymaps *', function() {
        setTimeout(function() {
            ct_repl_prodazha_800();
        }, 200);
        setTimeout(function() {
            ct_repl_prodazha_800();
        }, 1500);
        setTimeout(function() {
            ct_repl_prodazha_800();
        }, 2500);
    });
}            if (window['ct'] && typeof window['ct'] === 'function') {
            window['ct']('init_matcher_replacement', {useObserver: false, params: [{"value_code":"800","value_phone":"3510724","phone_code":"960","phone_number":"4855011","selector":"body"}]});
            }
            window.calltouch_phone_0 = "78612050856";window.calltouch_phone_1 = "78612054478";window.calltouch_phone_2 = "78617301756";window.calltouch_phone_3 = "78617308931";window.calltouch_phone_4 = "78692887128";window.calltouch_phone_5 = "78692887135";window.calltouch_phone_6 = "78003510724";window.calltouch_phone_7 = "78003512037";window.calltouch_phone_8 = "78003338134";            if (window['ct'] && typeof window['ct'] === 'function') {
            window['ct']('create_session', {
                sessionId: 441221865,
                country: "ru",
                siteId: 66770,
                modId: 'v1l8ifyh',
                setCookie: true,
                endSessionTime: 1787234035,
                domain: 'atlanta-gk.ru',
                setCtCookie: '2700000000295007232',
                setLkCookie: null,
                denialTime: 15,
                phones: {"394509":{"subPoolName":"\u041e\u0431\u0449\u0438\u0439 \u043f\u0443\u043b 8800 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435","phoneId":"1322315","phoneNumber":"78003510724","phoneCode":"800","phoneBody":"3510724"},"465273":{"subPoolName":"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440 \u0410\u0440\u0435\u043d\u0434\u0430","phoneId":"1321452","phoneNumber":"78612050856","phoneCode":"861","phoneBody":"2050856"},"465278":{"subPoolName":"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440 \u041f\u0440\u043e\u0434\u0430\u0436\u0430","phoneId":"1321472","phoneNumber":"78612054478","phoneCode":"861","phoneBody":"2054478"},"465279":{"subPoolName":"\u041d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a \u0410\u0440\u0435\u043d\u0434\u0430","phoneId":"1321478","phoneNumber":"78617301756","phoneCode":"8617","phoneBody":"301756"},"465283":{"subPoolName":"\u041d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a \u041f\u0440\u043e\u0434\u0430\u0436\u0430","phoneId":"1321486","phoneNumber":"78617308931","phoneCode":"8617","phoneBody":"308931"},"465285":{"subPoolName":"\u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c \u0410\u0440\u0435\u043d\u0434\u0430","phoneId":"1321495","phoneNumber":"78692887128","phoneCode":"8692","phoneBody":"887128"},"465286":{"subPoolName":"\u0421\u0435\u0432\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c \u041f\u0440\u043e\u0434\u0430\u0436\u0430","phoneId":"1321498","phoneNumber":"78692887135","phoneCode":"8692","phoneBody":"887135"},"530173":{"subPoolName":"\u0421\u0435\u0440\u0432\u0438\u0441","phoneId":"1506923","phoneNumber":"78003512037","phoneCode":"800","phoneBody":"3512037"},"544660":{"subPoolName":"\u041e\u0431\u0449\u0438\u0439 \u043f\u0443\u043b \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u041f\u0440\u043e\u0434\u0430\u0436\u0430","phoneId":"1550886","phoneNumber":"78003338134","phoneCode":"800","phoneBody":"3338134"}},
                emails: [],
                ecommerceGa4Enabled: false,
                ecommerceTimeout: 1000,
                calltouchDnsHost: '',
                dataGoEnabled: false,
                GA4: [],
                quietMediaEnabled: false,
                fields: '',
                isGtagEcom: false,
                cookieHash: '',
                firstPartyUrl: ''
            });
                        window['ct']('session_data', {"mod_id":"v1l8ifyh","source":"(direct)","medium":"(none)","utm_source":"","utm_medium":"","utm_campaign":"","utm_content":"","utm_term":"","keyword":"(not set)","city":"krasnodar","region":"krasnodarskiy kray","country":"","url":"https:\/\/atlanta-gk.ru\/catalog\/arenda\/arenda_podemnoe-oborudovanie\/arenda_nojnichnyy-podemnik\/","deviceType":"desktop"});
                        } else {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", 'https://mod.calltouch.ru/set_attrs_by_get.php?siteId=66770&sessionId=441221865&attrs={"clientError_NO_CT_CREATE_SESSION": 1}', true );
            xmlHttp.send( null );
            }
            
window.ctw = {};
window.ctw.clientFormConfig = {}
window.ctw.clientFormConfig.getClientFormsSettingsUrl = "//mod.calltouch.ru/callback_widget_user_form_find.php";
window.ctw.clientFormConfig.sendClientFormsRequestUrl = "//mod.calltouch.ru/callback_request_user_form_create.php";
(function (targetWindow, nameSpace, params){
!function(){var e={6396:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(6396),t=n.n(e);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach(function(n){t()(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function a(e,t,n,r){try{var a=Boolean(window.event&&window.event.target&&"A"===window.event.target.nodeName),c=Boolean(window.event&&(window.event.target&&"submit"===window.event.target.type||"submit"===window.event.type)),i=function(){var e;if(e||"undefined"==typeof XMLHttpRequest)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}else e=new XMLHttpRequest;return e}(),s=t?"POST":"GET";i.open(s,e,!a&&!c&&!r),a||c||r||(i.timeout=6e4),i.setRequestHeader("Content-type","application/json"),i.onreadystatechange=function(){if(4===i.readyState&&n)if(200===i.status){var e=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t}(i.response);e?e.data?n(!0,o({},e.data)):e.error?n(!1,o({},e.error)):n(!1,{type:"unknown_error",message:"Unknown JSON format",details:{}}):n(!1,{type:"unknown_error",message:"JSON parse error",details:{}})}else 0===i.status?n(!1,{type:"unknown_error",message:"Request timeout exceeded or connection reset",details:{}}):n(!1,{type:"unknown_error",message:"Unexpected HTTP code: ".concat(i.statusText),details:{}})},i.send(t)}catch(e){n&&n(!1,{type:"unknown_error",message:"Unexpected js exception",details:{}})}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(n){t()(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}!function(e,t,n){var r=e||window,o=t||"window.ctw";r[o]||(r[o]={});var c=r[o].clientFormConfig||{},s=c.getClientFormsSettingsUrl,u=c.sendClientFormsRequestUrl;r[o].getRouteKeyData=function(e,t){var r=1e6*Math.random(),o="".concat(s,"?siteId=").concat(n.siteId,"&routeKey=").concat(e,"&pageUrl=").concat(n.pageUrl,"&sessionId=").concat(n.sessionId);a("".concat(o,"&rand=").concat(Math.floor(r)),null,t)};var d=function(e,t,r,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,p=arguments.length>7?arguments[7]:void 0,f="boolean"==typeof p&&p,w=Array.isArray(p)&&p,y=1e6*Math.random(),g={siteId:n.siteId,sessionId:n.sessionId,workMode:1,pageUrl:n.pageUrl,tags:d,phone:t,routeKey:e,fields:r,scheduleTime:c,unitId:l};w&&(g.customFields=w),a("".concat(s,"?routeKey=").concat(e,"&siteId=").concat(n.siteId,"&pageUrl=").concat(n.pageUrl,"&sessionId=").concat(n.sessionId,"&rand=").concat(Math.floor(y)),null,function(e,n){if(e&&n.widgetData)if(n.widgetData.isNeedTwoFactorRequest){var r=document.querySelector("#CalltouchWidgetFrame");if(r&&r.contentWindow&&n.widgetData){var c=n.widgetData.widgetId;r&&r.contentWindow.openTwoFactorForm(t,c,function(e,t){var n=e.twoFactorCode,r=e.reqUuid;a("".concat(u,"?rand=2f").concat(Math.floor(y)),JSON.stringify(i(i({},g),{},{twoFactorCode:n,reqUuid:r})),function(e,n){t(e,n),e&&o(e,n)},f)})}}else a("".concat(u,"?rand=").concat(Math.floor(y)),JSON.stringify(g),o,f)},f)};r[o].createRequest=d,r[o+"_"+n.modId]={createRequest:d}}(targetWindow,nameSpace,params)}()}();
})(window, "ctw", {"siteId":66770,"sessionId":441221865,"pageUrl":"https:\/\/atlanta-gk.ru\/arenda\/nojnichnyy_elektricheskiy_podemnik_zoomlion_zs1012hd\/","modId":"v1l8ifyh"})
            var call_value = '441221865';
            var call_value_v1l8ifyh = call_value;
            if(window.onSessionCallValue) {
            onSessionCallValue('441221865', '');
            }
            