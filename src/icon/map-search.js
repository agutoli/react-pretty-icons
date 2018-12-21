import React from 'react';
import iconSvg from '../icons/normalized/map-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender