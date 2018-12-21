import React from 'react';
import iconSvg from '../icons/normalized/floor-lamp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__floor-lamp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender