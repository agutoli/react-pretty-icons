(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.clockEnd=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.002 1A7.001 7.001 0 0 0 5 7.998 7.002 7.002 0 0 0 12.002 15a7 7 0 0 0 0-14zm-.005 2.154a4.849 4.849 0 1 1 0 9.698 4.849 4.849 0 0 1 0-9.698zM11.002 5v3.691l3.189 1.836.746-1.298L12.5 7.823V5M15 16.001V19H2.998v2H15v3l3.999-4m0 0v3.999H21V16h-2"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__clock-end',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});