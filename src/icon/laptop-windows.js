import React from 'react';
import iconSvg from '../icons/normalized/laptop-windows.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laptop-windows" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender