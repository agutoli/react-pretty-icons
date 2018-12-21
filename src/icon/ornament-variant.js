import React from 'react';
import iconSvg from '../icons/normalized/ornament-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ornament-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender