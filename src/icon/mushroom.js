import React from 'react';
import iconSvg from '../icons/normalized/mushroom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mushroom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender