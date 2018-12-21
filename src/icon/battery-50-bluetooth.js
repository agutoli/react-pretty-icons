import React from 'react';
import iconSvg from '../icons/normalized/battery-50-bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-50-bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender