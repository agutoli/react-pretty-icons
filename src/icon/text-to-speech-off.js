import React from 'react';
import iconSvg from '../icons/normalized/text-to-speech-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__text-to-speech-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender