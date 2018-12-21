import React from 'react';
import iconSvg from '../icons/normalized/battery-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender