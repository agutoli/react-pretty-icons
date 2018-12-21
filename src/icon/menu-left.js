import React from 'react';
import iconSvg from '../icons/normalized/menu-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender