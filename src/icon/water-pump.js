import React from 'react';
import iconSvg from '../icons/normalized/water-pump.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__water-pump" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender