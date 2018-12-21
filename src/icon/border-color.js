import React from 'react';
import iconSvg from '../icons/normalized/border-color.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-color" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender