import React from 'react';
import iconSvg from '../icons/normalized/subway-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__subway-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender