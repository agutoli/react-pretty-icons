import React from 'react';
import iconSvg from '../icons/normalized/flash.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flash" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender