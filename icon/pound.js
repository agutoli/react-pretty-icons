(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.pound=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5.413 21l.705-4h-4l.353-2h4l1.058-6h-4l.353-2h4l.705-4h2l-.705 4h6l.705-4h2l-.705 4h4l-.353 2h-4l-1.058 6h4l-.353 2h-4l-.705 4h-2l.705-4h-6l-.705 4h-2zM9.53 9l-1.058 6h6l1.058-6h-6z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__pound',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});