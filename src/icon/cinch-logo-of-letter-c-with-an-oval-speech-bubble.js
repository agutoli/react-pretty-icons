import React from 'react';
import iconSvg from '../icons/normalized/cinch-logo-of-letter-c-with-an-oval-speech-bubble.svg';

function IconRender(props) {
  const paths = /^\<svg [^>]+\>(.*)<\/svg>/ig.exec(iconSvg)[1]
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="full"
      viewBox="0 0 24 24"
      className={`react-pretty-icons react-pretty-icons__cinch-logo-of-letter-c-with-an-oval-speech-bubble ${props.className}`}
      dangerouslySetInnerHTML={{__html: paths}} />
  )
}
export default IconRender