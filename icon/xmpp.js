(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.xmpp=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M11.998 15.397C9.745 13.09 8 9.545 8 6L2 4.003c0 5.646 4.332 10.111 8.547 12.655-1.17.845-2.4 1.339-3.547 1.339v1c1.199 0 3.025-.54 4.997-1.536C13.97 18.461 15.8 19 17 19v-1c-1.149 0-2.38-.495-3.552-1.343C17.665 14.114 22 9.647 22 4l-6 1.997c0 3.546-1.747 7.093-4.002 9.4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__xmpp',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});