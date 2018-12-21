import React from 'react';
import iconSvg from '../icons/normalized/dailybooth-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dailybooth-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender