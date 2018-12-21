import React from 'react';
import iconSvg from '../icons/normalized/shutter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shutter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender