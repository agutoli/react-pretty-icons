(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.lastfm=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18.007 17.931c-2.083-.008-3.194-1.034-3.965-2.841l-.22-.493-1.902-4.366c-.629-1.545-2.196-2.59-3.962-2.59-2.39 0-4.327 1.953-4.327 4.36S5.57 16.36 7.958 16.36a4.328 4.328 0 0 0 3.84-2.34l.77 1.786A5.935 5.935 0 0 1 7.959 18C4.668 18 2 15.316 2 12c0-3.312 2.669-6 5.958-6 2.484 0 4.49 1.335 5.509 3.702.077.183 1.077 2.538 1.95 4.542.54 1.24 1 2.063 2.494 2.114 1.469.05 2.476-.849 2.476-1.986 0-1.111-.767-1.378-2.065-1.812-2.33-.774-3.535-1.55-3.535-3.412 0-1.816 1.226-3.027 3.22-3.027 1.3 0 2.237.582 2.886 1.742l-1.273.655c-.482-.676-1.011-.943-1.684-.943-.936 0-1.603.655-1.603 1.527 0 1.237 1.098 1.424 2.636 1.932 2.069.678 3.031 1.453 3.031 3.389 0 2.032-1.731 3.512-3.993 3.508z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__lastfm '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});