(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cloudSync=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.002 3.999a7.486 7.486 0 0 1 7.348 6.04c2.598.181 4.649 2.32 4.649 4.961 0 2.759-2.241 5-5 5H6a6.005 6.005 0 0 1-6-6.001c0-3.09 2.339-5.64 5.351-5.962A7.5 7.5 0 0 1 12.002 4zM7.485 9.693a4.506 4.506 0 0 0 .332 5.99 4.497 4.497 0 0 0 3.184 1.31v1.87l2.828-2.828L11 13.207v1.788a2.473 2.473 0 0 1-1.767-.727 2.498 2.498 0 0 1-.318-3.146l-1.431-1.43zm1.685-.728l1.45 1.45 1.383 1.378v-1.788a2.482 2.482 0 0 1 1.767.727c.835.84.966 2.154.313 3.146l1.43 1.43a4.5 4.5 0 0 0-.332-5.992 4.485 4.485 0 0 0-3.178-1.309v-1.87L9.17 8.966z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cloud-sync '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});