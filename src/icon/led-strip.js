import React from 'react';
import iconSvg from '../icons/normalized/led-strip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__led-strip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender