import React from 'react';
import iconSvg from '../icons/normalized/server-network-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-network-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender