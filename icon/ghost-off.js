(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.ghostOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 3.268L3.277 2 22 20.723 20.732 22l-2.866-2.866L15 22l-3-3-3 3-3-3-3 3V11c0-1.906.592-3.673 1.603-5.128L2 3.268zM12 2a9 9 0 0 1 9 9v6.177l-5.302-5.302a2 2 0 1 0-2.573-2.573l-5.92-5.92A8.958 8.958 0 0 1 12 2zm-5 8a2 2 0 0 0 3.274 1.542L7.458 8.726C7.172 9.072 7 9.516 7 10z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__ghost-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});