(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.meteor=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M2.8 3.008l16.874 15.815s.317.443-.095.887c-.412.444-.952.063-.952.063L2.8 3.008zm5.011 1.585l13.1 12.043s.317.444-.095.887c-.412.444-.952.064-.952.064L7.811 4.593zm-3.52 3.391l13.1 12.043s.317.444-.096.887c-.412.444-.951.064-.951.064L4.29 7.984zm7.757-2.028l9.152 8.413s.222.31-.066.62c-.289.31-.665.045-.665.045l-8.42-9.078zm-6.597 5.958l9.152 8.414s.221.31-.067.62c-.288.31-.665.044-.665.044l-8.42-9.078zM16.375 7.92l4.179 3.815s.11.146-.033.29c-.143.146-.329.021-.329.021L16.375 7.92zm-8.817 8.176l4.178 3.816s.11.145-.033.29c-.142.146-.329.021-.329.021l-3.816-4.127z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__meteor '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});