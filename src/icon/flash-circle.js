import React from 'react';
import iconSvg from '../icons/normalized/flash-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flash-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender