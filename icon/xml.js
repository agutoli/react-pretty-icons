(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.xml=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M12.893 2.989l1.956.416-3.742 17.606-1.956-.416L12.893 2.99zm6.693 9.004L16 8.407V5.578L22.422 12 16 18.41v-2.832l3.586-3.585zm-18.008.01L8 5.581V8.41l-3.586 3.586L8 15.58v2.832l-6.422-6.41z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__xml',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});