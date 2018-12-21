import React from 'react';
import iconSvg from '../icons/normalized/close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender