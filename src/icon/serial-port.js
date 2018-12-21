import React from 'react';
import iconSvg from '../icons/normalized/serial-port.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__serial-port" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender