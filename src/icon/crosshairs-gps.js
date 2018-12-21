import React from 'react';
import iconSvg from '../icons/normalized/crosshairs-gps.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crosshairs-gps" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender