import React from 'react';
import iconSvg from '../icons/normalized/sim-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sim-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender