(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.codeLessThanOrEqual=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path fill="#0D0E0E" d="M13 13h5v2h-5m0-5.998h5v2h-5m-2.908-3.596l1.414 1.414-3.184 3.182 3.184 3.182-1.414 1.414-4.598-4.596M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.103 0 2-.896 2-2V5c0-1.104-.897-2-2-2H5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__code-less-than-or-equal',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});