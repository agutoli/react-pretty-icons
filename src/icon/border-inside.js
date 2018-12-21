import React from 'react';
import iconSvg from '../icons/normalized/border-inside.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-inside" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender