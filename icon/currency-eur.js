(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.currencyEur=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M7.07 11L7 12l.07 1h10.276l-.846 2H7.674A7 7 0 0 0 19.5 16.33v2.795A9.004 9.004 0 0 1 5.512 15H2l1-2h2.055L5 12l.055-1H2l1-2h2.512a9.004 9.004 0 0 1 14.92-3.295l-.866 2.049A7 7 0 0 0 7.674 9h11.364l-.846 2H7.071z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__currency-eur',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});