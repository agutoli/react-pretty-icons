(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.commentRemoveOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2l.01-12.002c0-1.105.885-2 1.99-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L13.903 18l-3.706 3.706a.997.997 0 0 1-.697.293V22H9zm1-6v3.075L13.075 16H20V4H4v12h6zM9.414 6L12 8.586 14.586 6 16 7.414 13.414 10 16 12.586 14.586 14 12 11.414 9.414 14 8 12.586 10.586 10 8 7.414 9.414 6z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__comment-remove-outline',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});