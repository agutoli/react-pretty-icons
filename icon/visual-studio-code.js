(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.visualStudioCode=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M3.285 7.768l1.136-.384 2.771 2.087L11.8 4.88l2.72 1.219.018 8.864-2.755 1.202-4.608-4.54-2.754 2.086-1.136-.384 2.772-2.754-2.772-2.805zm5.343 2.788l3.138 2.337V8.185l-3.138 2.37zm8.364 8.614V2.025L22 4.095v15.81l-5.092 2.07L2 16.916l14.992 2.254z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__visual-studio-code '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});