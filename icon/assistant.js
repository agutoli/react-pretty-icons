(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.assistant=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M18.999 2.002H5A2.006 2.006 0 0 0 2.998 4v13.998C2.998 19.101 3.9 20 5 20h3.999l3.003 2.997L15 20h3.999A2.009 2.009 0 0 0 21 17.997V4a2.006 2.006 0 0 0-2-1.998zm-5.118 10.88l-1.879 4.12-1.88-4.12-4.12-1.88 4.12-1.88L12.003 5l1.88 4.121 4.115 1.88"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__assistant',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});