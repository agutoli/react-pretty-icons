import React from 'react';
import iconSvg from '../icons/normalized/hype-machine-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hype-machine-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender