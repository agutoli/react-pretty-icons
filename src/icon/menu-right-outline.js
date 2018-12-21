import React from 'react';
import iconSvg from '../icons/normalized/menu-right-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-right-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender