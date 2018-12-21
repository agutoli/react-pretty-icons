import React from 'react';
import iconSvg from '../icons/normalized/designbump-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__designbump-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender