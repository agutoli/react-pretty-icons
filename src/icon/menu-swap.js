import React from 'react';
import iconSvg from '../icons/normalized/menu-swap.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu-swap" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender