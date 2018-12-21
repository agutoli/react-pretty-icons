import React from 'react';
import iconSvg from '../icons/normalized/image-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender