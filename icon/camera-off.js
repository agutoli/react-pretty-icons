(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cameraOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M1.2 4.468L2.477 3.2 20 20.723 18.732 22l-2-2H4a2 2 0 0 1-2-2V6c0-.22.036-.432.101-.63L1.2 4.468zM7 4l2-2h6l2 2h3a2 2 0 0 1 2 2v12c0 .597-.262 1.134-.677 1.5l-4.995-4.995a5 5 0 0 0-6.833-6.833L5.823 4H7zm0 8a5 5 0 0 0 6.502 4.77l-1.784-1.783a3 3 0 0 1-2.705-2.706L7.23 10.498C7.08 10.972 7 11.477 7 12zm5-3a3 3 0 0 1 2.828 4.005l-3.833-3.833A2.995 2.995 0 0 1 12 9z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__camera-off '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});