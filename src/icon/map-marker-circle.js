import React from 'react';
import iconSvg from '../icons/normalized/map-marker-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender