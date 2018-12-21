import React from 'react';
import iconSvg from '../icons/normalized/thermometer-lines.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thermometer-lines" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender