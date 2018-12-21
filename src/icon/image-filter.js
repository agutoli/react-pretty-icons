import React from 'react';
import iconSvg from '../icons/normalized/image-filter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-filter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender