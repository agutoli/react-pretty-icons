import React from 'react';
import iconSvg from '../icons/normalized/bus-articulated-front.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-articulated-front" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender