import React from 'react';
import iconSvg from '../icons/normalized/map-legend.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-legend" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender