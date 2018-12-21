import React from 'react';
import iconSvg from '../icons/normalized/microphone-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__microphone-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender