import React from 'react';
import iconSvg from '../icons/normalized/camera-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender