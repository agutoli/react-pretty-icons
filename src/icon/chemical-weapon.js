import React from 'react';
import iconSvg from '../icons/normalized/chemical-weapon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chemical-weapon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender