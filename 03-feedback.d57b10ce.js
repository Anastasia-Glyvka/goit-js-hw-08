function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var r,i,o,f,u,a,c=0,l=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void 0,c=e,f=t.apply(o,n)}function T(t){return c=t,u=setTimeout(h,e),l?y(t):f}function j(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function h(){var t=v();if(j(t))return w(t);u=setTimeout(h,function(t){var n=e-(t-a);return d?p(n,o-(t-c)):n}(t))}function w(t){return u=void 0,g&&r?y(t):(r=i=void 0,f)}function x(){var t=v(),n=j(t);if(r=arguments,i=this,a=t,n){if(void 0===u)return T(a);if(d)return u=setTimeout(h,e),y(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=m(e)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(m(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=i=u=void 0},x.flush=function(){return void 0===u?f:w(v())},x}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form"),T={};y.addEventListener("input",t(e)((function(t){T[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(t){t.preventDefault(t.currentTarget),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),populateTextarea();
//# sourceMappingURL=03-feedback.d57b10ce.js.map
