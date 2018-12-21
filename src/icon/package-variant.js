import React from 'react';
import iconSvg from '../icons/normalized/package-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__package-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender