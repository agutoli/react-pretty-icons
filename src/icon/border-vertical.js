import React from 'react';
import iconSvg from '../icons/normalized/border-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender