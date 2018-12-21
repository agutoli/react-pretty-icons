import React from 'react';
import iconSvg from '../icons/normalized/map-marker-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender