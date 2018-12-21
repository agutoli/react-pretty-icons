import React from 'react';
import iconSvg from '../icons/normalized/feature-search-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__feature-search-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender