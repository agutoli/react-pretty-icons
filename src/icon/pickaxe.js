import React from 'react';
import iconSvg from '../icons/normalized/pickaxe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pickaxe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender