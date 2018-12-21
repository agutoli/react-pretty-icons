import React from 'react';
import iconSvg from '../icons/normalized/battery-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender