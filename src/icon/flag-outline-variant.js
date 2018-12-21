import React from 'react';
import iconSvg from '../icons/normalized/flag-outline-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag-outline-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender