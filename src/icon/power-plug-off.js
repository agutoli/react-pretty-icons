import React from 'react';
import iconSvg from '../icons/normalized/power-plug-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-plug-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender