import React from 'react';
import iconSvg from '../icons/normalized/image-filter-black-white.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-filter-black-white" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender