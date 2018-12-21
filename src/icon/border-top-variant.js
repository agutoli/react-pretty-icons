import React from 'react';
import iconSvg from '../icons/normalized/border-top-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-top-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender