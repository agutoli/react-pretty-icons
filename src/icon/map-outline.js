import React from 'react';
import iconSvg from '../icons/normalized/map-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender