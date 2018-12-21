import React from 'react';
import iconSvg from '../icons/normalized/panorama-wide-angle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__panorama-wide-angle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender