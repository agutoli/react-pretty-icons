(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.salesforce=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18.379 6.374c-.703 0-1.306.201-1.909.402-.703-1.205-2.009-2.009-3.415-2.009-1.105 0-2.11.502-2.813 1.206-.804-1.005-2.01-1.708-3.416-1.708-2.31 0-4.32 1.909-4.32 4.219 0 .603.202 1.206.403 1.808A3.678 3.678 0 0 0 1 13.507c0 2.009 1.607 3.717 3.616 3.717.302 0 .603 0 .804-.1.402 1.506 1.909 2.611 3.717 2.611 1.708 0 3.114-1.004 3.616-2.41.503.2 1.005.401 1.507.401 1.306 0 2.512-.703 3.114-1.808.302.1.603.1.905.1 2.611 0 4.721-2.11 4.721-4.822.1-2.712-2.01-4.822-4.621-4.822z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__salesforce '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});