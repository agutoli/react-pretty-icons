import React from 'react';
import iconSvg from '../icons/normalized/border-none-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-none-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender