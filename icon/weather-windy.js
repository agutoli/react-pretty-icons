(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.weatherWindy=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4 10a1 1 0 1 1 0-2h8a2 2 0 1 0-1.414-3.414 1 1 0 0 1-1.414-1.414A4 4 0 1 1 12 10H4zm15 2a1 1 0 1 0-.707-1.707 1 1 0 0 1-1.414-1.414A3 3 0 1 1 19 14H5a1 1 0 1 1 0-2h14zm-1 6H4a1 1 0 1 1 0-2h14a3 3 0 1 1-2.121 5.121 1 1 0 1 1 1.414-1.414A1 1 0 1 0 18 18z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__weather-windy '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});