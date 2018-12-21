import React from 'react';
import iconSvg from '../icons/normalized/alien.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alien" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender