import React from 'react';
import iconSvg from '../icons/normalized/document.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__document" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender