import React from 'react';
import iconSvg from '../icons/normalized/camera-rear.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-rear" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender