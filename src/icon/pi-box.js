import React from 'react';
import iconSvg from '../icons/normalized/pi-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pi-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender