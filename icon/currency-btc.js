(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.currencyBtc=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M6 4h2V2h2v2h2V2h2v2.027a4.5 4.5 0 0 1 2.56 7.772A4.5 4.5 0 0 1 14 20v2h-2v-2h-2v2H8v-2H6l.5-2H8V6H6V4zm4 9v5h4a2.5 2.5 0 0 0 0-5h-4zm0-7v5h3.5a2.5 2.5 0 0 0 0-5H10z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__currency-btc',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});