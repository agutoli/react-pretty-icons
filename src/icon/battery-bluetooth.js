import React from 'react';
import iconSvg from '../icons/normalized/battery-bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender