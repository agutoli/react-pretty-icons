import React from 'react';
import iconSvg from '../icons/normalized/battery-30-bluetooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-30-bluetooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender