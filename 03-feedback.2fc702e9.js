!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,a=setTimeout(T,t),s?j(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function h(e){return a=void 0,b&&r?j(e):(r=i=void 0,f)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return O(l);if(d)return a=setTimeout(T,t),j(l)}return void 0===a&&(a=setTimeout(T,t)),f}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||f.test(e)?a(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j,O,S,T,h=document.querySelector("form"),w="feedback-form-state",N=null!==(j=JSON.parse(localStorage.getItem(w)))&&void 0!==j?j:{};h.addEventListener("submit",(function(e){e.preventDefault(),console.log(N),N={},localStorage.removeItem(w),e.currentTarget.reset()})),h.addEventListener("input",(function(e){var t=e.target,n=t.name,o=t.value;N[n]=o,localStorage.setItem(w,JSON.stringify(N))})),O=h.elements,S=O.email,T=O.message,S.value=N.email||"",T.value=N.message||""}();
//# sourceMappingURL=03-feedback.2fc702e9.js.map