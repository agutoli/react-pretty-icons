import React from 'react';
import iconSvg from '../icons/normalized/baby-buggy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__baby-buggy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender