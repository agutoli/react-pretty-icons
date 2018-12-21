import React from 'react';
import iconSvg from '../icons/normalized/microphone-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__microphone-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender