(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.letterPSymbol=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M25.757 90V55.945l.265-.631h.986l.185.312c3.69 6.073 10.861 9.701 19.188 9.701C60.625 65.327 75 54.923 75 31.681 75 13.023 64.052 0 48.369 0c-9.882 0-17.575 4.131-22.235 11.953l-.441.304h-.955l-.657-10.939H15c.272 6.184.505 12.424.505 20.199V90h10.252zm0-62.547c0-1.246.265-2.765.81-4.753 2.109-8.669 9.602-14.727 18.225-14.727 11.599 0 19.692 9.965 19.692 24.234 0 15.355-7.887 25.281-20.093 25.281-8.599 0-15.875-5.644-18.081-14.04-.376-1.374-.553-2.94-.553-4.922V27.453z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__letter-p-symbol '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});