import React from 'react';
import iconSvg from '../icons/normalized/cursor-default.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor-default" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender