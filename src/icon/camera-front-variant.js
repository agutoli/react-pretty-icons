import React from 'react';
import iconSvg from '../icons/normalized/camera-front-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-front-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender