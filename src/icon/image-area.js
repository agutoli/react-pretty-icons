import React from 'react';
import iconSvg from '../icons/normalized/image-area.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-area" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender