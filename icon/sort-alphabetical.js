(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.sortAlphabetical=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9.25 5l3.25-3.25L15.75 5h-6.5zm6.5 14l-3.25 3.25L9.25 19h6.5zm-6.859-4.697H6l-.72 2.688H2.915L6 7.004h2.996l3.13 9.987H9.67l-.779-2.688zm-2.562-1.624h2.232l-.629-2.122-.266-.965-.243-.964h-.03l-.227.973-.237.98-.6 2.098zm6.726 4.298v-1.233L17.8 8.97v-.058h-4.302V7.018h7.23v1.323l-4.643 6.683v.058h4.716v1.895h-7.746z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__sort-alphabetical '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});