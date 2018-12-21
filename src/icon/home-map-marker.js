import React from 'react';
import iconSvg from '../icons/normalized/home-map-marker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-map-marker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender