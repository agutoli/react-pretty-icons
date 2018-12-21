import React from 'react';
import iconSvg from '../icons/normalized/power.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender