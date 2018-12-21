import React from 'react';
import iconSvg from '../icons/normalized/bus-side.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-side" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender