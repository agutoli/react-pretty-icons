(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.medium=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4.372 7.3a.775.775 0 0 0-.252-.653l-1.868-2.25v-.336H8.05l4.482 9.83 3.94-9.83H22v.336l-1.597 1.53a.466.466 0 0 0-.177.449v11.248c-.029.17.04.343.177.448l1.56 1.53v.337h-7.844v-.336l1.616-1.568c.159-.159.159-.206.159-.448V8.495l-4.492 11.407h-.606L5.566 8.495v7.645c-.043.321.064.645.29.877l2.101 2.549v.336H2v-.336l2.1-2.549c.226-.233.326-.558.272-.877V7.3z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__medium '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});