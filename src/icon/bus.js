import React from 'react';
import iconSvg from '../icons/normalized/bus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender