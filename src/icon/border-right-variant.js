import React from 'react';
import iconSvg from '../icons/normalized/border-right-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-right-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender