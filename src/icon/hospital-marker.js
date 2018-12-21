import React from 'react';
import iconSvg from '../icons/normalized/hospital-marker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hospital-marker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender