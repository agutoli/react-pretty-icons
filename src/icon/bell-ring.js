import React from 'react';
import iconSvg from '../icons/normalized/bell-ring.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-ring" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender