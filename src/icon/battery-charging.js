import React from 'react';
import iconSvg from '../icons/normalized/battery-charging.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-charging" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender