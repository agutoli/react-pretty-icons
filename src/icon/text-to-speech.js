import React from 'react';
import iconSvg from '../icons/normalized/text-to-speech.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__text-to-speech" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender