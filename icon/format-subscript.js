(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.formatSubscript=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16 7.41L11.41 12 16 16.59 14.59 18 10 13.41 5.41 18 4 16.59 8.59 12 4 7.41 5.41 6 10 10.59 14.59 6 16 7.41zm5.848 13.62h-4.883v-.996l.897-.804c.756-.647 1.321-1.191 1.696-1.632.374-.44.566-.852.576-1.234a.941.941 0 0 0-.271-.7c-.183-.185-.473-.28-.87-.287a2.12 2.12 0 0 0-.83.179l-.654.382-.458-1.171c.265-.211.591-.386.98-.526a3.93 3.93 0 0 1 1.292-.218c.779.014 1.372.225 1.78.634.409.408.614.932.617 1.572a2.7 2.7 0 0 1-.535 1.551 7.897 7.897 0 0 1-1.275 1.357l-.64.519v.02h2.578v1.354z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__format-subscript '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});