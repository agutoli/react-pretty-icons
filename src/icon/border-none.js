import React from 'react';
import iconSvg from '../icons/normalized/border-none.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-none" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender