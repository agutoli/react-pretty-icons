import React from 'react';
import iconSvg from '../icons/normalized/menu-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender