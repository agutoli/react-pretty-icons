import React from 'react';
import iconSvg from '../icons/normalized/camera-enhance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-enhance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender