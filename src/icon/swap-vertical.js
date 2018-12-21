import React from 'react';
import iconSvg from '../icons/normalized/swap-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__swap-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender