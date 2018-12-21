import React from 'react';
import iconSvg from '../icons/normalized/debian.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__debian" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender