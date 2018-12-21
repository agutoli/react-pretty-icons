import React from 'react';
import iconSvg from '../icons/normalized/camera-gopro.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-gopro" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender