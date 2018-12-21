import React from 'react';
import iconSvg from '../icons/normalized/image-area-close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-area-close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender