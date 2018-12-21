import React from 'react';
import iconSvg from '../icons/normalized/battery-charging-10.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-charging-10" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender