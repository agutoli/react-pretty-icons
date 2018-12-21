import React from 'react';
import iconSvg from '../icons/normalized/map-marker-distance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-distance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender