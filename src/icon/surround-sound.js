import React from 'react';
import iconSvg from '../icons/normalized/surround-sound.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__surround-sound" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender