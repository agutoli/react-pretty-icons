import React from 'react';
import iconSvg from '../icons/normalized/google-talk-logo-of-a-speech-bubble.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-talk-logo-of-a-speech-bubble" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender