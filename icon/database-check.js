(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.databaseCheck=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M13 17.705v3c-.947.193-1.965.295-3 .295-4.42 0-8-1.79-8-4v-3c0 2.21 3.58 4 8 4 1.035 0 2.053-.102 3-.295zM2 9c0 2.21 3.58 4 8 4s8-1.79 8-4v3c0 2.21-3.58 4-8 4s-8-1.79-8-4V9zm8-6c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4zm13.5 14l-5 4.998L15 18.5l1.5-1.5 2 2 3.5-3.5 1.5 1.5z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__database-check '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});