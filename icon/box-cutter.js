(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.boxCutter=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M7.222 11.906a1.98 1.98 0 0 0-.565 1.172l5.515 2.364 8.485-8.486a1.996 1.996 0 0 0 0-2.828l-1.414-1.414a1.996 1.996 0 0 0-2.829 0l-9.192 9.192zM5 16v5.75l5.813-5.219-5-2L5 16zM17.121 4.835a1 1 0 1 1 1.415 1.414 1 1 0 0 1-1.415-1.414z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__box-cutter',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});