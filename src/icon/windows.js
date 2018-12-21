import React from 'react';
import iconSvg from '../icons/normalized/windows.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__windows" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender