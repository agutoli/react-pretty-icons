(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.thumbUp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M23 9.998a2 2 0 0 0-2-2h-6.316l.954-4.569a1.492 1.492 0 0 0-.407-1.376L14.171.998 7.585 7.584A1.994 1.994 0 0 0 7 8.998v10a2 2 0 0 0 2 2h9a2 2 0 0 0 1.842-1.22l3.017-7.053c.088-.225.141-.47.141-.727v-2zm-22 11h4v-12H1v12z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__thumb-up',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});