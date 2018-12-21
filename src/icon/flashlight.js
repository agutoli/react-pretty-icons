import React from 'react';
import iconSvg from '../icons/normalized/flashlight.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flashlight" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender