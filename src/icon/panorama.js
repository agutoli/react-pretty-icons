import React from 'react';
import iconSvg from '../icons/normalized/panorama.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__panorama" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender