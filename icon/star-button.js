(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.starButton=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.655 49.654"><path d="M24.827 0C11.138 0 0 11.137 0 24.826c0 13.688 11.137 24.828 24.826 24.828 13.688 0 24.827-11.14 24.827-24.828C49.653 11.137 38.516 0 24.827 0zm13.716 23.011l-7.188 5.201 2.769 8.46a1.34 1.34 0 0 1-2.054 1.504l-7.244-5.24-7.243 5.24a1.338 1.338 0 0 1-2.054-1.504l2.769-8.46-7.187-5.2v-.001a1.336 1.336 0 0 1 .784-2.42h8.897l2.755-8.421a1.339 1.339 0 0 1 2.56 0l2.754 8.421h8.896a1.337 1.337 0 0 1 .786 2.42z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__star-button '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});