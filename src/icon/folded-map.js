import React from 'react';
import iconSvg from '../icons/normalized/folded-map.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folded-map" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender