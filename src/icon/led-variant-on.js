import React from 'react';
import iconSvg from '../icons/normalized/led-variant-on.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__led-variant-on" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender