(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.languagePythonText=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 5.69c6.923-4.616 9.095 1.322 9.276 4.58.181 3.258-2.986 7.365-6.968 4.65v5.385L2 18.766V5.69zm2.217 1.706v5.385c3.62 2.172 4.864.385 4.864-2.692 0-4.344-2.51-4.502-4.864-2.693zm10.86-3.245s-.181 3.484 0 6.923c.362 3.439 4.615.77 4.615.77V4.92L22 5.202v9.242c0 6.154-6.154 5.86-6.154 5.86l-.77-2.307c5.385 0 4.707-3.564 4.707-3.564-6.516 2.534-7.014-1.82-7.014-1.82V5.69l2.308-1.539z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__language-python-text '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});