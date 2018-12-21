import React from 'react';
import iconSvg from '../icons/normalized/panorama-fisheye.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__panorama-fisheye" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender