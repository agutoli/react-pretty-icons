(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.presentationOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.65 54.65"><path d="M24.138 5.009h6.373c.44 0 .798-.447.798-1V1.444C31.309.339 30.595 0 29.714 0h-4.779c-.88 0-1.594.34-1.594 1.444v2.564c.001.553.357 1.001.797 1.001z"/><path d="M33.308 3.102v.906c0 1.654-1.255 3-2.798 3h-6.373c-1.542 0-2.797-1.346-2.797-3v-.906H7.325v36.396a4 4 0 0 0 4 4h10.911l-7.523 6.865a2 2 0 0 0-.129 2.826 2.003 2.003 0 0 0 2.826.128l7.915-7.224v6.556a2 2 0 0 0 4 0v-6.873l8.221 7.543a1.994 1.994 0 0 0 2.824-.136 1.997 1.997 0 0 0-.134-2.823l-7.485-6.862h10.574a4 4 0 0 0 4-4V3.102H33.308zm10.017 36.397h-32V13.006h32v26.493z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__presentation-outline '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});