import React from 'react';
import iconSvg from '../icons/normalized/menu-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender