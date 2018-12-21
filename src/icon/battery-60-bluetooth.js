import React from 'react';
import iconSvg from '../icons/normalized/battery-60-bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-60-bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender