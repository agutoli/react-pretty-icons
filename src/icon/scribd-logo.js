import React from 'react';
import iconSvg from '../icons/normalized/scribd-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scribd-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender