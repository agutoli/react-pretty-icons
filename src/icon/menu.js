import React from 'react';
import iconSvg from '../icons/normalized/menu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__menu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender