import React from 'react';
import iconSvg from '../icons/normalized/border-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender