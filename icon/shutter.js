(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.shutter=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.5 117.3c.2.1.3.2.5.2 7.2 3.2 15.1 5 23.5 5 23.4 0 43.6-14 52.8-34 .1-.2.2-.3.3-.5 3.2-7.2 5-15.2 5-23.6 0-23.5-14-43.7-34.1-52.8-.2-.1-.3-.2-.5-.3-7.2-3.2-15.1-5-23.4-5-23.6.1-43.8 14.2-53 34.4-.1.2-.2.3-.2.5-3.2 7.2-5 15.1-5 23.4.1 23.4 14.1 43.6 34.1 52.7zm24-2.9c-5.1 0-10.1-.8-14.7-2.2l41.7-41.7 17.3 17.1c-8.5 15.9-25.1 26.8-44.3 26.8zm-.1-28.5L43 64.5l21.1-21.1 21.5 21.3-21.2 21.2zm50-21.4c0 5.2-.8 10.2-2.3 14.9L69.9 37.7l17.5-17.4c16 8.3 27 25 27 44.2zM64.5 14.6c5.1 0 10.1.8 14.7 2.2l-42 41.9-17-17c8.3-16.1 25-27.1 44.3-27.1zM16.8 49.9l17.5 17.5 24.3 24.3-17.1 17.1c-16-8.3-27-25-27-44.2.1-5.2.9-10.1 2.3-14.7z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__shutter '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});