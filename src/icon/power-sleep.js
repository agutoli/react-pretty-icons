import React from 'react';
import iconSvg from '../icons/normalized/power-sleep.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-sleep" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender