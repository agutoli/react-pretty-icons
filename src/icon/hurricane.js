import React from 'react';
import iconSvg from '../icons/normalized/hurricane.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hurricane" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender