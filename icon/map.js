(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.map=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M15 18.998l-6-2.107V4.998l6 2.107m5.5-4.107a.426.426 0 0 0-.157.025L15 5.098l-6-2.1-5.637 1.898a.508.508 0 0 0-.363.48v15.122a.5.5 0 0 0 .657.475L9 18.898l6 2.1 5.638-1.898a.51.51 0 0 0 .362-.48V3.497c0-.277-.223-.5-.5-.5z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__map',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});