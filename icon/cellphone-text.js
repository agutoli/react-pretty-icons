(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.cellphoneText=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M17 18.998v-14H7v14h10zm0-17.99c1.103 0 2 .886 2 1.99v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-18a2 2 0 0 1 2-2l10 .01zM9 7h6v2H9V7zm0 4h4v2H9v-2z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__cellphone-text',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});