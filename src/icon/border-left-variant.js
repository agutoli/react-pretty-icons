import React from 'react';
import iconSvg from '../icons/normalized/border-left-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-left-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender