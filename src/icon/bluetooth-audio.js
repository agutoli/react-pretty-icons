import React from 'react';
import iconSvg from '../icons/normalized/bluetooth-audio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bluetooth-audio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender