(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.desktopTowerMonitor=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22 18h-5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm0-10h-5v1h5V8zm0 2h-5v1h5v-1zM9 15v2h1v1H5v-1h1v-2H2c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h11c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H9zm3-7H3v5h9V8z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__desktop-tower-monitor '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});