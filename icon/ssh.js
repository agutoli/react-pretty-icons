(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.ssh=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M4.5 9c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H7v.75H3.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H5v-.75h3.5V9h-4zm6 0c-.6 0-1 .5-1 1v1.75c0 .5.4 1 1 1H13v.75H9.5V15h4c.6 0 1-.5 1-1v-1.75c0-.5-.4-1-1-1H11v-.75h3.5V9h-4zm5 0v6H17v-2.5h2V15h1.5V9H19v2h-2V9h-1.5z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__ssh '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});