(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cloudAlert=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19 20H6c-3.292 0-6-2.708-6-6 0-3.1 2.34-5.64 5.35-5.97A7.506 7.506 0 0 1 12 4a7.49 7.49 0 0 1 7.35 6.03c2.6.19 4.65 2.33 4.65 4.97 0 2.743-2.257 5-5 5zm-8-5v2h2v-2h-2zm0-2h2V8l-2-.01V13z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cloud-alert '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});