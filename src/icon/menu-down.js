import React from 'react';
import iconSvg from '../icons/normalized/menu-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender