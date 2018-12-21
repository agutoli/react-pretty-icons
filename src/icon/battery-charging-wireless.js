import React from 'react';
import iconSvg from '../icons/normalized/battery-charging-wireless.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-charging-wireless" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender