import React from 'react';
import iconSvg from '../icons/normalized/led-on.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__led-on" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender