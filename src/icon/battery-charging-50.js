import React from 'react';
import iconSvg from '../icons/normalized/battery-charging-50.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-charging-50" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender