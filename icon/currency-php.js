(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.currencyPhp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5 2v4H3v2h2v2H3v2h2v10h2v-6h6a7 7 0 0 0 6.32-4H22v-2h-2.08a6.288 6.288 0 0 0 0-2H22V6h-2.68A7 7 0 0 0 13 2M7 4h6a5 5 0 0 1 4 2H7V4zm6 10H7v-2h10a5 5 0 0 1-4 2zm5-5c-.003.336-.036.67-.1 1H7V8h10.9c.064.33.097.664.1 1z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__currency-php',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});