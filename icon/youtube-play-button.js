(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.youtubePlayButton=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M90 26.958C90 19.525 83.979 13.5 76.55 13.5h-63.1C6.021 13.5 0 19.525 0 26.958v36.084C0 70.475 6.021 76.5 13.45 76.5h63.1C83.979 76.5 90 70.475 90 63.042V26.958zM36 60.225V26.33l25.702 16.947L36 60.225z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__youtube-play-button '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});