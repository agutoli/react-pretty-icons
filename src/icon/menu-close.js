import React from 'react';
import iconSvg from '../icons/normalized/menu-close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender