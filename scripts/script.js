!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o(e.ityped={})}(this,function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,o){return o.strings.indexOf(e)===o.strings.length-1},t=function(e,o,t,r){t.placeholder?o.placeholder=o.placeholder.substring(0,--e):o.innerHTML=o.innerHTML.substring(0,--e),0===e&&n(r,t)&&t.loop?i(o,t):n(r,t)&&!t.loop&&t.onFinished()},r=function(e,r,i,s){var a=i.strings[r];window.setTimeout(function(){Array.from(a).forEach(function(r,s){return setTimeout(function(){return u=e,c=i,(d=s)===(r=a).length-1&&window.setTimeout(function(){for(var e=0,i=function(o){if(e+=1,c.disableBackTyping&&n(r,c)&&!c.loop)return{v:c.onFinished()};setTimeout(function(){return t(o,u,c,r)},c.backSpeed*e)},s=r.length-1;s>=0;s--){var a=i(s);if("object"===(void 0===a?"undefined":o(a)))return a.v}},c.backDelay),void(c.placeholder?u.placeholder+=r[d]:u.innerHTML+=r[d]);var r,d,u,c},i.typeSpeed*(s+1))})},s)},i=function(e,o){for(var n=[],t=o.strings,i=o.startDelay,s=o.typeSpeed,a=o.backSpeed,d=o.backDelay,u=(o.loop,t.length),c=0;c<u;c++){var l=t[c].length,p=l*s+i+l*a+d;n.push(p);var f=0===c?i:i+n[c-1];r(e,c,o,f)}};e.init=function(e,o){var n,t=function(e){var o=e.strings,n=void 0===o?["Put your strings here...","and Enjoy!"]:o,t=e.typeSpeed,r=void 0===t?100:t,i=e.backSpeed,s=void 0===i?50:i,a=e.backDelay,d=void 0===a?500:a,u=e.startDelay,c=void 0===u?500:u,l=e.cursorChar,p=void 0===l?"|":l,f=e.placeholder,y=void 0!==f&&f,v=e.showCursor,h=void 0===v||v,b=e.disableBackTyping,g=void 0!==b&&b,m=e.onFinished,S=void 0===m?function(){}:m,k=e.loop;return{strings:n,typeSpeed:r,backSpeed:s,cursorChar:p,backDelay:d,placeholder:y,startDelay:c,showCursor:h,loop:void 0===k||k,disableBackTyping:g,onFinished:S}}(o||{}),r=(n=e,"string"==typeof n?document.querySelector(n):n);s=r,a=function(e){var o=e.cursorChar,n=document.createElement("span");return n.classList.add("ityped-cursor"),n.textContent=o,n}(t),t.showCursor&&s.insertAdjacentElement("afterend",a);var s,a;i(r,t)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.min.js.map
window.onload = function() {
    Particles.init({
        // normal options
        selector: '.background',
        maxParticles: 120,
        color:'#ffffff',
        connectParticles: true,
        // options for breakpoints
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 50,
              color: '#ffffff',
              connectParticles: false
            }
          }, {
            breakpoint: 425,
            options: {
              maxParticles: 50,
              connectParticles: true
            }
          }, {
            breakpoint: 320,
            options: {
              maxParticles: 0 // disables particles.js
            }
          }
        ]
      }); 
}; 