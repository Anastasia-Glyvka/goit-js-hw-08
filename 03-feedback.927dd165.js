function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t,e,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function j(t){return c=t,f=setTimeout(h,e),l?m(t):u}function T(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function h(){var t=v();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return d?p(n,o-(t-c)):n}(t))}function w(t){return f=void 0,y&&i?m(t):(i=r=void 0,u)}function x(){var t=v(),n=T(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(d)return f=setTimeout(h,e),m(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=g(e)||0,b(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(g(n.maxWait)||0,e):o,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:w(v())},x}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(t,e,{leading:i,maxWait:e,trailing:r})};const m=document.querySelector(".feedback-form");m.addEventListener("input",t(e)(onTextArea,500)),m.addEventListener("submit",(function(t){t.preventDefault()}));
//# sourceMappingURL=03-feedback.927dd165.js.map
