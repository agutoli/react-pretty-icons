import React from 'react';
import iconSvg from '../icons/normalized/microphone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__microphone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender