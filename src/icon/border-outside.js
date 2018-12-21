import React from 'react';
import iconSvg from '../icons/normalized/border-outside.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-outside" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender