import React from 'react';
import iconSvg from '../icons/normalized/flash-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flash-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender