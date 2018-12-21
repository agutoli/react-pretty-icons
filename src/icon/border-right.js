import React from 'react';
import iconSvg from '../icons/normalized/border-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender