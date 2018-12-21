import React from 'react';
import iconSvg from '../icons/normalized/map-marker-path.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-path" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender