import React from 'react';
import iconSvg from '../icons/normalized/border-top.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-top" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender