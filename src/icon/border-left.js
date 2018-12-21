import React from 'react';
import iconSvg from '../icons/normalized/border-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender