(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.seal=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20.394 19.37l-4.011-1.38L15.002 22l-3.077-6-2.926 5.999-1.381-4.012-4.012 1.381 2.926-5.998a7 7 0 1 1 10.936 0l2.926 6zM7 9l2.686 1.343-.18 2.993 2.506-1.655 2.502 1.652-.18-2.997 2.682-1.341-2.693-1.346.179-2.976-2.486 1.64-2.522-1.665.18 3.015L7 9z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__seal '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});