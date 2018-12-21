import React from 'react';
import iconSvg from '../icons/normalized/path-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__path-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender