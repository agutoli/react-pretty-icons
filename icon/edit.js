(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.edit=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M119.2 114.3H9.8c-2.3 0-4.1 1.9-4.1 4.1s1.9 4.1 4.1 4.1h109.5c2.3 0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1zM5.7 78l-.1 19.5c0 1.1.4 2.2 1.2 3 .8.8 1.8 1.2 2.9 1.2l19.4-.1c1.1 0 2.1-.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9L79.8 8.1c-1.6-1.6-4.2-1.6-5.9 0L60.5 21.6 6.9 75.1c-.7.8-1.2 1.8-1.2 2.9zm71.2-61.1l13.5 13.5-7.6 7.6-13.5-13.5 7.6-7.6zM14 79.8l49.4-49.4 13.5 13.5-49.4 49.3-13.6.1.1-13.5z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__edit '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});