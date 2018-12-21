import React from 'react';
import iconSvg from '../icons/normalized/battery-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender