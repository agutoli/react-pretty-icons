(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.borderLeftVariant=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 4.998h2v-2h-2m4 18h2v-2h-2m0-6h2v-2h-2m0-6h2v-2h-2m0 14h2v-2h-2m-4 6h2v-2h-2m4-10h2v-2h-2m-16 14h2v-18H3m4 2h2v-2H7m0 18h2v-2H7m4-14h2v-2h-2m0 18h2v-2h-2v2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__border-left-variant',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});