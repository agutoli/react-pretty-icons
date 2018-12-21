import React from 'react';
import iconSvg from '../icons/normalized/led-variant-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__led-variant-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender