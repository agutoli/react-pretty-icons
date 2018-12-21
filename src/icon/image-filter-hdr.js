import React from 'react';
import iconSvg from '../icons/normalized/image-filter-hdr.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-filter-hdr" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender