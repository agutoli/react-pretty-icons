import React from 'react';
import iconSvg from '../icons/normalized/thermometer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thermometer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender