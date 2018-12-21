import React from 'react';
import iconSvg from '../icons/normalized/printer-3d.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__printer-3d" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender