(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.informationOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11 8.998h2v-2h-2m1 13c-4.412 0-8-3.589-8-8s3.588-8 8-8c4.41 0 8 3.589 8 8s-3.59 8-8 8zm0-18c-5.524 0-10 4.477-10 10s4.476 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-1 15h2v-6h-2v6z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__information-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});