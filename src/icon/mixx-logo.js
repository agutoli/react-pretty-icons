import React from 'react';
import iconSvg from '../icons/normalized/mixx-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mixx-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender