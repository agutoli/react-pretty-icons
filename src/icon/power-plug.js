import React from 'react';
import iconSvg from '../icons/normalized/power-plug.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-plug" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender