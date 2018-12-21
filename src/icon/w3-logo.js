import React from 'react';
import iconSvg from '../icons/normalized/w3-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__w3-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender