(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.bookmarkCheck=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path fill="#050708" d="M17 2.998a2 2 0 0 1 2 2v16l-7-3-7 3 .01-16c0-1.104.885-2 1.99-2h10zm-6 11.009l6.25-6.25-1.414-1.414L11 11.179 8.414 8.593 7 10.007l4 4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__bookmark-check',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});