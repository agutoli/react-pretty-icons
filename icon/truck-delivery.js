(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.truckDelivery=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.998 3.999A1.997 1.997 0 0 0 1 5.996v11.001h1.997a3.001 3.001 0 1 0 6 0H15a3 3 0 1 0 6.001 0h1.996v-5l-2.997-4h-2.997V4M10 6l3.999 4L10 13.999V11H3.999V9H10m7.003.498h2.5l1.962 2.5h-4.462M6 15.498a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11.996 0c.832 0 1.506.674 1.506 1.5a1.5 1.5 0 0 1-1.506 1.5 1.5 1.5 0 0 1 0-3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__truck-delivery '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});