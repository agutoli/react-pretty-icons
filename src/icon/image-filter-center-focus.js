import React from 'react';
import iconSvg from '../icons/normalized/image-filter-center-focus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-filter-center-focus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender