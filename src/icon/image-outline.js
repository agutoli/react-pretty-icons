import React from 'react';
import iconSvg from '../icons/normalized/image-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender