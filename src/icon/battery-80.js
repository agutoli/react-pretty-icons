import React from 'react';
import iconSvg from '../icons/normalized/battery-80.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-80" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender