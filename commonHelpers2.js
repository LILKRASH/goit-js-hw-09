import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form");function l(t){const a=e.elements.email.value.trim(),s=e.elements.message.value.trim(),o=JSON.stringify({email:a,message:s});localStorage.setItem("feedback-form-state",o)}e.addEventListener("input",l);const m=localStorage.getItem("feedback-form-state");if(m){const t=JSON.parse(m);e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}function n(t){t.preventDefault();const a=e.elements.email.value.trim(),s=e.elements.message.value.trim();a&&s&&(console.log({email:a,message:s}),localStorage.removeItem("feedback-form-state"),e.reset())}e.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
