(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.commentAlert=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.885-2 1.99-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.903 18l-3.706 3.706a.997.997 0 0 1-.697.293V22H9zm4-12V6h-2v4h2zm0 4v-2h-2v2h2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__comment-alert',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});