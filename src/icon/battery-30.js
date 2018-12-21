import React from 'react';
import iconSvg from '../icons/normalized/battery-30.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-30" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender