(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.currencyGbp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 21v-2c4-2 3.5-6 3.5-6H7v-2h2.5c-1-4.5.5-8 4.5-8 2 0 3 .5 3 .5v2c-6-2-6 2.5-5.5 5.5H16v2h-4.5s.5 4-2 6H18v2H6z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__currency-gbp',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});