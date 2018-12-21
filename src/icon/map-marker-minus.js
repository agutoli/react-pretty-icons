import React from 'react';
import iconSvg from '../icons/normalized/map-marker-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender