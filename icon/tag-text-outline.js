(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tagTextOutline=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M5.499 6.999a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15.91 4.58c.365.363.59.865.59 1.42 0 .552-.223 1.05-.585 1.414l-7 7a1.999 1.999 0 0 1-2.83 0l-8.997-8.998a1.994 1.994 0 0 1-.588-1.416v-7a2 2 0 0 1 2-2h7c.553 0 1.053.223 1.415.585l8.996 8.996zM13 20l7-7-8.5-8.5-7 7L13 20zM10.086 8.914L11.5 7.5 17 13l-1.414 1.414-5.5-5.5zm-2.5 2.5L9 10l4 4-1.414 1.414-4-4z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tag-text-outline',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});