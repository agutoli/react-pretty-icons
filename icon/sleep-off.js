(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.sleepOff=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2 5.268L3.277 4 20 20.723 18.732 22l-6-6H9v-2l.794-.937L2 5.268zM23 12h-6v-2l3.39-4H17V4h6v2l-3.381 4H23v2zM9.823 8H15v2l-1.456 1.722L9.823 8zM7 20H1v-2l3.39-4H1v-2h6v2l-3.381 4H7v2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__sleep-off',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});