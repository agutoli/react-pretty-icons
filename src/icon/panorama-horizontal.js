import React from 'react';
import iconSvg from '../icons/normalized/panorama-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__panorama-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender