(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.formatLetterCaseUpper=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(h){return h&&h.__esModule?h:{default:h}}(b),f=Object.assign||function(h){for(var k,j=1;j<arguments.length;j++)for(var l in k=arguments[j],k)Object.prototype.hasOwnProperty.call(k,l)&&(h[l]=k[l]);return h};a.default=function(h){var j=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 24 24"><path d="M20.06 18c-.083-.167-.15-.463-.202-.89-.672.7-1.475 1.05-2.408 1.05-.833 0-1.517-.235-2.05-.706-.533-.471-.8-1.069-.8-1.794 0-.88.335-1.563 1.004-2.05.669-.487 1.61-.73 2.823-.73h1.405v-.64c0-.488-.15-.877-.452-1.166-.302-.29-.747-.434-1.335-.434-.517 0-.95.121-1.298.364-.348.242-.522.536-.522.881H14.77c0-.427.15-.838.45-1.235.3-.397.706-.71 1.219-.943a4.058 4.058 0 0 1 1.691-.347c.975 0 1.738.244 2.29.732.552.489.838 1.162.86 2.02v3.905c0 .779.098 1.398.295 1.858V18H20.06zm-2.4-1.12a2.74 2.74 0 0 0 1.289-.319c.406-.212.7-.488.881-.829V14.16h-1.132c-1.77 0-2.655.47-2.655 1.41 0 .41.15.73.452.962.302.232.69.348 1.165.348zm-12.2-3.166h4.071L7.5 8.29l-2.04 5.425zM6.643 6h1.714l4.714 12h-1.928l-.969-2.571H4.817L3.857 18H1.93L6.643 6zM2 20h11v2H2v-2z"/></svg>')[1];return e.default.createElement('svg',f({},h,{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__format-letter-case-upper '+h.className,dangerouslySetInnerHTML:{__html:j}}))},module.exports=a.default});