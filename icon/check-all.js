(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.checkAll=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path fill="#050708" d="M.413 13.412L6 18.998l1.413-1.414-5.586-5.586m20.415-6.414L11.656 16.17l-4.171-4.172-1.414 1.414 5.585 5.586 12-12m-5.656 0l-1.415-1.414-6.343 6.343 1.414 1.414L18 6.998z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__check-all',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});