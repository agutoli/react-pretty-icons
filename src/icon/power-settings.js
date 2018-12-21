import React from 'react';
import iconSvg from '../icons/normalized/power-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender