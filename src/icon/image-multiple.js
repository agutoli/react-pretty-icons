import React from 'react';
import iconSvg from '../icons/normalized/image-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender