import React from 'react';
import iconSvg from '../icons/normalized/border-all-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__border-all-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender