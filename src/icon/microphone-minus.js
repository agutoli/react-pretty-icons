import React from 'react';
import iconSvg from '../icons/normalized/microphone-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__microphone-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender