(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.reflectHorizontal=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M22.019 20h-8.017A1.002 1.002 0 0 1 13 18.998V4.968a1.001 1.001 0 0 1 1.872-.497l8.017 14.03a1.003 1.003 0 0 1-.87 1.499zM1.981 20a1.003 1.003 0 0 1-.87-1.5L9.128 4.472A1.001 1.001 0 1 1 11 4.968v14.03C11 19.552 10.552 20 9.998 20H1.98zm7.015-2.004V8.742l-5.288 9.254h5.288z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__reflect-horizontal',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});