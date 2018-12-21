import React from 'react';
import iconSvg from '../icons/normalized/map-pin-marked.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-pin-marked" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender