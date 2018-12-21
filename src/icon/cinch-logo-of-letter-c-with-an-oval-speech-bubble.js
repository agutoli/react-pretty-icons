import React from 'react';
import iconSvg from '../icons/normalized/cinch-logo-of-letter-c-with-an-oval-speech-bubble.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cinch-logo-of-letter-c-with-an-oval-speech-bubble" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender