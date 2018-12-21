import React from 'react';
import iconSvg from '../icons/normalized/menu-up-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-up-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender