(()=>{"use strict";var t,e={360:()=>{!function(){var t,e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}},r=document.body;function n(){var t=document.querySelector(".js-cards");e.any()?(r.classList.contains("pc")&&r.classList.remove("pc"),r.classList.add("mobile"),t.addEventListener("click",a)):(r.classList.contains("mobile")&&r.classList.remove("mobile"),r.classList.add("pc"),t.removeEventListener("click",a))}function a(e){var r=e.target.closest(".card");if(r){if(e.target.closest(".card__button"))return;r.classList.toggle("card--show-control")}t&&t!==r&&t.classList.remove("card--show-control"),console.log(),t=r}window.addEventListener("resize",n),n()}()},50:()=>{!function(){var t=[],e=document.querySelector(".js-catalog"),r=document.querySelector(".js-sidebar-cart");function n(t){var e=document.querySelector(".js-sidebar-cart__list"),r=document.querySelector(".js-sidebar-cart__count"),n="";t.forEach((function(t,e){var r='\n\t\t\t\t<li class="sidebar-cart__item">\n\t\t\t\t\t<div class="sidebar-cart__product sidebar-product" data-id=\''.concat(e,'\'>\n\t\t\t\t\t\t<h4 class="sidebar-product__title">').concat(t.title,'</h4>\n\t\t\t\t\t\t<div class="sidebar-product__close-btn"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t');n+=r})),e.innerHTML=n,r.innerHTML=t.length}e.addEventListener("click",(function(e){var r={},a=e.target.closest(".card__button");if(a){var i=a.closest(".card");r.title=i.querySelector(".card__link").textContent,t.push(r),n(t)}})),r.addEventListener("click",(function(e){var r=e.target.closest(".sidebar-product__close-btn");if(r){var a=r.closest(".sidebar-product");t.forEach((function(e,r,i){a.dataset.id==r&&(i.splice(r,1),n(t))}))}}))}()},361:(t,e,r)=>{r(360),r(50)},435:()=>{}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,a,i)=>{if(!r){var o=1/0;for(l=0;l<t.length;l++){for(var[r,a,i]=t[l],c=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((t=>n.O[t](r[s])))?r.splice(s--,1):(c=!1,i<o&&(o=i));if(c){t.splice(l--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={548:0,30:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var a,i,[o,c,s]=r,d=0;if(o.some((e=>0!==t[e]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var l=s(n)}for(e&&e(r);d<o.length;d++)i=o[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self.webpackChunktest=self.webpackChunktest||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[30],(()=>n(361)));var a=n.O(void 0,[30],(()=>n(435)));a=n.O(a)})();