(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.chartArc=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M16.176 19.6l-2.007-3.477A4.496 4.496 0 0 0 15.972 13h4.013a8.494 8.494 0 0 1-3.809 6.6zM13 7.026V3.014A8.501 8.501 0 0 1 20.985 11h-4.012A4.502 4.502 0 0 0 13 7.027zM7 12.5c0 .641.134 1.252.376 1.804L3.9 16.31A8.5 8.5 0 0 1 11 4.015v4.012A4.5 4.5 0 0 0 7 12.5zm4.5 8.5a8.492 8.492 0 0 1-7.1-3.824l3.477-2.007A4.494 4.494 0 0 0 11.5 17c.641 0 1.251-.134 1.804-.376L15.31 20.1c-1.147.576-2.44.9-3.811.9z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__chart-arc',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});