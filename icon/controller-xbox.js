(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.controllerXbox=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path stroke-width=".2" stroke-linejoin="round" stroke="#FFF" d="M12 6.059c1.726 0 6.686-4.314 9.274.863C23.863 12.098 23.216 19 21.49 19c-4.313 0-1.725-4.314-9.49-4.314C4.235 14.686 6.824 19 2.51 19c-1.726 0-2.373-6.902.215-12.078 2.589-5.177 7.55-.863 9.275-.863zM12 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__controller-xbox '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});