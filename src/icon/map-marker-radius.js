import React from 'react';
import iconSvg from '../icons/normalized/map-marker-radius.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-marker-radius" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender