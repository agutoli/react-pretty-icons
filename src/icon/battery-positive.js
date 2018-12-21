import React from 'react';
import iconSvg from '../icons/normalized/battery-positive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-positive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender