(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.pen=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20.706 7.041c-.334.334-.668.669-.675.996-.007.328.313.648.634.969.471.471.943.942.924 1.432-.018.49-.526.999-1.035 1.507l-4.132 4.132-1.414-1.415 4.243-4.242-.962-.962-1.415 1.416-3.75-3.75 3.832-3.833a.999.999 0 0 1 1.414 0l2.336 2.336a.999.999 0 0 1 0 1.414zM3 17.248l9.564-9.564 3.75 3.75-9.564 9.564H3v-3.75z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__pen '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});