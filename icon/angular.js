(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.angular=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12 2.5l8.845 3.154-1.35 11.695L12 21.5l-7.495-4.151-1.35-11.695L12 2.5zm0 2.1L6.471 16.997h2.062l1.111-2.774h4.693l1.111 2.774h2.062L12 4.599zm1.615 7.913h-3.23L12 8.627l1.615 3.886z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__angular',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});