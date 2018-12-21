import React from 'react';
import iconSvg from '../icons/normalized/battery-charging-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-charging-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender