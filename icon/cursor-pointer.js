(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cursorPointer=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M13.746 10.187l.635.136 4.165 2.078a1.615 1.615 0 0 1 1.107 1.66v.255l-.907 6.125a1.75 1.75 0 0 1-.599 1.107c-.306.3-.715.469-1.143.472h-6.888a1.751 1.751 0 0 1-1.27-.553l-5.99-5.98.908-.972a1.3 1.3 0 0 1 .98-.39h.29L9 14.997V4.5a2 2 0 0 1 4 0v5.687h.746z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cursor-pointer',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});