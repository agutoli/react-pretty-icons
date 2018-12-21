import React from 'react';
import iconSvg from '../icons/normalized/pistol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pistol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender