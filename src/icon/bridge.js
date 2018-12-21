import React from 'react';
import iconSvg from '../icons/normalized/bridge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bridge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender