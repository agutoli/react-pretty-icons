(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.android=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 4.998h-1v-1h1m-5 1H9v-1h1m5.531-1.842L16.835.852a.5.5 0 0 0-.707-.708l-1.477 1.478A5.964 5.964 0 0 0 12 .998c-.958 0-1.86.231-2.663.63L7.853.143a.502.502 0 0 0-.708.708l1.312 1.311A5.985 5.985 0 0 0 6 6.998h12a5.984 5.984 0 0 0-2.468-4.842zM20.5 7.998a1.5 1.5 0 0 0-1.5 1.5v7a1.5 1.5 0 1 0 3 0v-7a1.5 1.5 0 0 0-1.5-1.5zm-17 0a1.5 1.5 0 0 0-1.5 1.5v7a1.5 1.5 0 1 0 3 0v-7a1.5 1.5 0 0 0-1.5-1.5zm2.5 10c0 .551.45 1 1 1h1v3.5a1.5 1.5 0 1 0 3 0v-3.5h2v3.5a1.5 1.5 0 1 0 3 0v-3.5h1c.551 0 1-.449 1-1v-10H6v10z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__android '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});