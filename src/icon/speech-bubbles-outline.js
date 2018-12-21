import React from 'react';
import iconSvg from '../icons/normalized/speech-bubbles-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__speech-bubbles-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender