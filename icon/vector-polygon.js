(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.vectorPolygon=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2.002 2.002v5.995h2.276l1.288 8.004H4v6.002h6v-1.94l5-.01v1.95h6.001V16H19.17L20 9h2.003V2.998H16v3.536l-1.2 1.463H9.59L7.997 5.82V2.002M4 4h2v2H4m13.997-1H20v2.003h-2.003M6.31 7.997h.805L9 10.587v3.412h6v-3.087L16.567 9h1.422l-.83 7H15v2.055l-5 .005V16H7.598M11 10h1.997v2.002H11m-5 5.995h1.996V20H6.002m11.002-2.003H19V20h-1.996"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__vector-polygon',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});