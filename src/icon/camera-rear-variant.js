import React from 'react';
import iconSvg from '../icons/normalized/camera-rear-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-rear-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender