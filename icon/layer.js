(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.layer=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M118.7 114.3H14.4V10.5c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v107.9c0 2.3 1.8 4.1 4.1 4.1h108.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1z"/><path d="M118.7 6.4H29.2c-2.3 0-4.1 1.8-4.1 4.1v89c0 2.3 1.8 4.1 4.1 4.1h89.5c2.3 0 4.1-1.8 4.1-4.1v-89c0-2.2-1.8-4.1-4.1-4.1zm-4.1 89.1H33.3V14.6h81.3v80.9z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__layer '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});