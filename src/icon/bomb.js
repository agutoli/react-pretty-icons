import React from 'react';
import iconSvg from '../icons/normalized/bomb.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bomb" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender