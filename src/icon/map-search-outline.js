import React from 'react';
import iconSvg from '../icons/normalized/map-search-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__map-search-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender