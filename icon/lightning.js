(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.lightning=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M57.4 122.2c.5.2 1 .3 1.5.3 1.3 0 2.6-.6 3.4-1.8l42.9-62c.9-1.2 1-2.9.3-4.2-.7-1.3-2.1-2.2-3.6-2.2l-26.6-.2L83 11.3c.4-1.8-.6-3.7-2.3-4.5C79 6 77 6.5 75.8 8L30.3 65.3c-1 1.2-1.2 2.9-.5 4.3s2.1 2.3 3.7 2.3l29.4.2-7.9 45.6c-.4 1.9.6 3.8 2.4 4.5zM41.9 63.8l30-37.8-5.6 29.5c-.2 1.2.1 2.4.9 3.4.8.9 1.9 1.5 3.1 1.5l23.7.1-27.9 40.4 5.5-32.2c.2-1.2-.1-2.4-.9-3.3-.7-.9-1.8-1.4-3-1.4l-25.8-.2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__lightning '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});