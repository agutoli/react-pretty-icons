import React from 'react';
import iconSvg from '../icons/normalized/flag-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flag-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender