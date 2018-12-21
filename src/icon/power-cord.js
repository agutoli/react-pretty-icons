import React from 'react';
import iconSvg from '../icons/normalized/power-cord.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-cord" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender