(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.label=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M17.632 5.843A1.998 1.998 0 0 0 16 4.998l-11 .01c-1.104 0-2 .886-2 1.99v10c0 1.105.896 1.99 2 1.99l11 .01c.674 0 1.271-.333 1.633-.844L22 11.998l-4.367-6.155z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__label',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});