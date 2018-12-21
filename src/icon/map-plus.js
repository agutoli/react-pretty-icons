import React from 'react';
import iconSvg from '../icons/normalized/map-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender