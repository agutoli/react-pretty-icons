(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.rice=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22 11h-2.3c-.3-1.1-.8-2.2-1.5-3l3.4-5.4-1.7-1.1-3.2 5.1c-.4-.3-.7-.5-1.2-.7l.9-3.6-1.9-.5-.8 3.4c-.6-.1-1.1-.2-1.7-.2-3.7 0-6.8 2.6-7.7 6H2c0 4.1 2.5 7.6 6 9.2V22h8v-1.8c3.5-1.6 6-5.1 6-9.2zM12 7c2.6 0 4.8 1.7 5.6 4H6.4c.8-2.3 3-4 5.6-4z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__rice '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});