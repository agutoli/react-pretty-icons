import React from 'react';
import iconSvg from '../icons/normalized/thermostat-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thermostat-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender