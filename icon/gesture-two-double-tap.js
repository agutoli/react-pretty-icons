(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.gestureTwoDoubleTap=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19 15.14v6.36a1.55 1.55 0 0 1-1.5 1.5H11a1.37 1.37 0 0 1-1-.43l-4.9-4.2.74-.77a1 1 0 0 1 .74-.32h.22L10 19V9a1 1 0 1 1 2 0V7a1 1 0 1 1 2 0v5l4.15 1.84c.51.234.84.74.85 1.3zM13 3a4 4 0 0 1 2 7.465V9.236a3 3 0 1 0-4.871-3.108A3.001 3.001 0 0 0 9 11.237v1.229a4 4 0 0 1 .354-7.111A4 4 0 0 1 13 3zm0-2a6 6 0 0 1 3.377 10.96l-1.119-.498A5 5 0 0 0 13 2a4.999 4.999 0 0 0-4.392 2.608A5.001 5.001 0 0 0 9 13.584v1.075A6.003 6.003 0 0 1 7.876 3.876 5.996 5.996 0 0 1 13 1z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__gesture-two-double-tap '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});