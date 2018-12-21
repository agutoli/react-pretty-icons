import React from 'react';
import iconSvg from '../icons/normalized/bus-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender