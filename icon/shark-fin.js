(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.sharkFin=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M45 0C20.148 0 0 20.148 0 45s20.148 45 45 45 45-20.148 45-45S69.852 0 45 0zm24.234 58.846c-3.463 0-6.926-6.92-6.926-6.92s-4.92-17.316-27.69-20.772c2.004 31.148-9.518 27.407-13.854 27.692-4.326.285-6.836-5.996-6.836-13.846 0-17.158 13.914-31.071 31.072-31.071 17.16 0 30.66 13.913 31.07 31.071.084 3.463-3.379 13.846-6.836 13.846z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__shark-fin '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});