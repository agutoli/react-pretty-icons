(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.feather=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22 2s-7.638-.367-13.662 7.882C3.721 16.206 2 22 2 22l1.941-.985C5.378 18.485 6.132 17.47 7.544 16c2.53.74 5.166.647 7.456-2-1.984-.562-3.6-.427-5.956-.191C11.691 12 13.478 11.603 16 12l1-2c-1.798-.337-2.978-.369-4.78.044C14.19 8.65 15.559 7.867 18 8l1.213-1.934c-1.566-.11-2.505.06-4.294.508 1.61-1.468 3.102-2.122 5.22-2.25 0 0 1.052-1.89 1.861-2.324z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__feather '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});