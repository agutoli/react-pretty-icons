(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.borderHorizontal=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M19 20.998h2v-2h-2m-4 2h2v-2h-2m-4-2h2v-2h-2m8-6h2v-2h-2m0-2h2v-2h-2m-16 10h18v-2H3m8 10h2v-2h-2m8-2h2v-2h-2m-6-12h-2v2h2m0 2h-2v2h2m4-6h-2v2h2m-8-2H7v2h2m-4-2H3v2h2m2 16h2v-2H7m-4-2h2v-2H3m2-8H3v2h2m-2 12h2v-2H3v2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__border-horizontal',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});