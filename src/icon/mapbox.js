import React from 'react';
import iconSvg from '../icons/normalized/mapbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mapbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender