(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.tumblrLogoButton=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.652 49.652"><path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm8.393 36.659c-1.15.542-2.196.926-3.134 1.144-.936.217-1.944.328-3.032.328-1.233 0-1.963-.156-2.91-.467-.949-.313-1.758-.76-2.427-1.333-.672-.577-1.134-1.19-1.393-1.839-.259-.65-.389-1.593-.389-2.828v-9.466h-3.668v-3.824c1.06-.344 2.289-.837 3.044-1.48a7.366 7.366 0 0 0 1.82-2.318c.461-.899.775-2.048.948-3.438h3.839v6.241h6.241v4.82h-6.241v6.92c0 1.565-.021 2.471.146 2.914.166.44.578.899 1.027 1.164.601.358 1.28.538 2.049.538 1.367 0 2.728-.443 4.078-1.332v4.256h.002z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__tumblr-logo-button '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});