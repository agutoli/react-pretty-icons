(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.autoUpload=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5.35 12.648l1.15-3.65 1.15 3.65M5.5 6.998l-3.2 9h1.9l.7-2h3.2l.7 2h1.9l-3.2-9m3.5 13h11v-2H11m3-2h5v-5h3l-5.5-5.5-5.5 5.5h3v5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__auto-upload',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});