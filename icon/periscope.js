(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.periscope=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 7a2 2 0 1 1-4 0 5 5 0 1 0 2.768-1.847A2 2 0 0 1 12 7zm0-5a8 8 0 0 1 7.434 10.96C17.895 17.376 13.625 22 12 22c-1.626 0-5.893-4.624-7.434-9.04A8 8 0 0 1 12 2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__periscope',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});