import React from 'react';
import iconSvg from '../icons/normalized/led-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__led-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender