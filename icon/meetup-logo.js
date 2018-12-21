(function(a,b){if('function'==typeof define&&define.amd)define(['exports','react'],b);else if('undefined'!=typeof exports)b(exports,require('react'));else{var c={exports:{}};b(c.exports,a.react),a.meetupLogo=c.exports}})(this,function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0});var e=function(g){return g&&g.__esModule?g:{default:g}}(b);a.default=function(){var g=/^\<svg [^>]+\>(.*)<\/svg>/ig.exec('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.117 430.117"><path d="M196.502 221.383c-1.44 0-2.887-.117-3.958-1.62.324-5.693 2.184-9.948 3.99-14.052.808-1.848 1.619-3.689 2.28-5.673l.807-2.336.666 2.371c1.561 5.5 1.064 15.752-1.354 21.269l-2.431.041zm179.674-35.935l-.719.672c-12.289 11.586-16.746 31.253-19.957 48.764 10.254-2.771 18.968-12.241 22.729-22.658 2.291-6.361 3.873-16.024-1.568-25.914l-.485-.864zM151.727 217.01c.644.252 1.377.55 2.394.55l.511-.106 1.244-.611c.964-4.712.663-10.816-.81-16.746-3.781 4.292-6.088 9.299-6.961 15.709l-.117.868 1.923-.103c.716-.001 1.228.186 1.816.439zm278.39 111.719c0 8.485-6.879 15.364-15.363 15.364H15.364C6.877 344.094 0 337.215 0 328.729V101.387C0 92.9 6.877 86.023 15.364 86.023h399.39c8.484 0 15.363 6.877 15.363 15.364v227.342zm-300.939-83.54c-4.261-11.752-7.024-25.062-9.678-38.103-3.435-16.75-6.972-33.759-12.979-47.035-.711.065-1.418.726-2.098.726-2.124 0-3.972.501-5.817.205-1.752-.306-3.512 1.505-5.586 1.505h-.593c-.539 0-1.027-2.107-1.26-2.261-9.579 12.956-12.872 30.448-17.201 48.183-2.394-4.2-4.588-8.51-6.763-12.921-3.843-7.752-7.815-15.714-12.316-22.094-1.26-.107-2.49-.117-3.666-.117-5.154 0-9.833.929-14.229 2.21l-.227 11.903c-.483 20.442-.894 38.093 4.259 54.754.957.158 1.93.237 2.896.237 6.174 0 11.637-3.015 14.008-4.223.378-5.228-.273-9.307-.943-13.638-.357-2.222-.721-4.457.455-7.364 3.58 4.648 6.728 9.744 9.864 14.836 1.998 3.226 3.995 6.437 5.523 9.208 1.034.107 2.009.149 2.94.149 2.413 0 4.545-.299 6.671-.588 2.212-.299 4.401-.578 6.905-.578l1.421.518c2.837-6.301 2.992-15.564 3.139-24.535.133-8.233.282-16.729 3.939-23.06 3.99 18.388 9.428 36.254 16.591 54.586 2.52-.345 5.311-1.209 7.892-2.007 1.92-.598 3.659-1.162 5.041-1.162.703.003 1.315.312 1.812.666zm49.473 3.846c-1.375-2.492-3.358-3.654-6.184-3.654-2.158 0-4.62.611-6.991 1.265-2.427.653-4.917 1.278-7.164 1.278-.621 0-1.199-.153-1.773-.271-2.7-.514-4.884-2.203-6.471-4.555-2.868-4.266-3.57-11.257-.999-19.77 4.145 1.119 9.357 1.287 15.065 1.287h1.405c1.461 0 2.795.467 3.664.822 2.808-11.397 1.295-26.934-.954-35.872-1.741-.364-3.288-.999-4.833-1.528-2.705-.934-5.236-1.841-8.702-1.841-.597 0-1.218-.028-1.836.042-10.977 1.473-18.442 16.872-20.143 31.34-1.578 13.348 1.3 29.379 14.069 34.308 2.63 1.013 5.899 1.517 9.703 1.517 7.592 0 16.401-2.128 22.144-4.368zm43.567-3.249c-.69-2.291-2.679-3.556-5.628-4.476-2.507 3.888-6.406 6.04-11.017 6.04-4.898 0-9.763-2.488-12.685-6.511-2.791-3.837-3.475-8.625-1.008-13.979 3.958.808 7.829 1.545 11.437 1.545 2.996 0 5.691-.476 7.962-.737-.702-8.765.315-14.918 1.396-21.427.898-5.439 1.829-11.051 2.025-17.842-4.998-3.78-10.316-5.71-16.248-6.235-14.639 11.191-21.434 28.343-20.794 52.299 2.002 10.595 15.964 17.147 27.762 17.147 7.191.001 13.227-2.338 16.798-5.824zm50.713-32.848c-1.82-1.458-3.36-3.169-4.905-4.91-2.917-3.269-5.68-6.354-10.165-7.558-.929.019-1.115.695-1.218 2.765-.094 1.664-.233 4.226-2.772 4.226l-1.745.019.074-.607c.625-7.428.079-15.982-.518-25.463-.822-13.444-1.686-26.017.704-37.388-2.959-3.549-7.472-5.428-16.208-5.428h-.322c-.724 0-1.382-2.24-1.578-2.632-4.494 13.833-2.31 28.994-.195 45.562 1.213 9.453 2.361 18.271.961 26.826-1.727 0-3.481-.217-5.181-.35-1.507-.128-2.996-.287-4.331-.287-2.506 0-4.004.437-4.904 1.458-1.018 1.141-1.321 3.097-1.266 5.458 3.454 2.371 9.428 2.53 15.201 2.679l3.636.831c.158 5.05.556 9.866.942 14.696.588 7.071 1.167 14.38 1.022 22.352 1.53-.215 2.907-.29 4.242-.374 2.586-.163 5.031-.317 7.804-.644-.089-5.643-.299-11.02-.5-16.195-.275-7.229-.536-14.094.089-21.51 2.558-.733 5.661-.901 8.653-1.06 5.012-.28 10.202-.565 12.48-2.466zm53.326-8.982c-3.594-2.938-8.046-8.013-13.124-8.013h-1.148c-.546 0-1.008 1.391-1.26 1.136l-.126 5.302c-.341 14.536-.826 34.669-14.725 39.496-1.325-8.723-1.681-18.253-2.017-26.78-.177-4.543-.345-8.664-.191-11.546a42.405 42.405 0 0 1-3.822-2.094c-3.458-2.074-6.706-4.009-11.957-4.697-2.096 24.992.42 41.542 7.453 49.177 2.898 3.15 6.628 4.761 11.085 4.761 3.136 0 6.688-.77 10.221-2.021l1.344-2.067c2.511-3.846 4.154-6.395 7.906-9.246.957-1.713 1.979-3.822 3.015-5.465 4.592-7.367 8.933-15.245 7.346-27.943zm67.112-23.527c-7.658-4.482-14.328-6.641-20.409-6.641-7.57 0-14.132 3.402-20.068 10.421-11.173 13.191-13.502 40.655-15.107 54.483-.672.29-1.409.514-2.156.729-1.937.574-3.762 1.12-4.462 2.025 5.871 6.805 7.029 18.342 8.149 29.486.877 8.602 1.755 17.492 4.274 23.536 1.4.304 3.36.458 6.002.458 1.237 0 2.539-.038 3.832-.038 2.184 0 4.336.099 6.039.616-4.065-10.254-5.652-24.152-4.392-44.459 16.577-3.92 31.307-15.681 38.434-30.695 4.298-9.072 7.724-23.418-.136-39.921z"/></svg>')[1];return e.default.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',baseProfile:'full',viewBox:'0 0 24 24',className:'react-pretty-icons react-pretty-icons__meetup-logo',dangerouslySetInnerHTML:{__html:g}})},module.exports=a.default});