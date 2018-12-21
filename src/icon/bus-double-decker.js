import React from 'react';
import iconSvg from '../icons/normalized/bus-double-decker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-double-decker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender