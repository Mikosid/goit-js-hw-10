import"./assets/reset-df635d97.js";import{f as y,i as h}from"./assets/vendor-77e16229.js";const t=document.querySelector("button"),b=document.querySelector("input"),p=document.querySelector(".value[ data-days]"),C=document.querySelector(".value[ data-hours]"),S=document.querySelector(".value[ data-minutes]"),v=document.querySelector(".value[ data-seconds]");t.disabled=!0;let r,o,l;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<Date.now()?h.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",closeColor:"#FFFFFF"}):(t.disabled=!1,t.style.background="#4E75FF",t.style.color="#FFF")}};y("#datetime-picker",g);t.addEventListener("click",e=>{t.disabled=!0,b.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898",o=r-Date.now(),d(u(o)),l=setInterval(()=>{o-=1e3,d(u(o)),k(o)},1e3)});function u(e){const i=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),F=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:m,minutes:F,seconds:f}}function d({days:e,hours:a,minutes:s,seconds:c}){p.textContent=`${n(e)}`,C.textContent=`${n(a)}`,S.textContent=`${n(s)}`,v.textContent=`${n(c)}`}function k(e){e<=1e3&&clearInterval(l)}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map