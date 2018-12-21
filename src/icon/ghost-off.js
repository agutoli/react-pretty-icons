import React from 'react';
import iconSvg from '../icons/normalized/ghost-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ghost-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender