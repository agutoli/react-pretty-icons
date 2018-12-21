import React from 'react';
import iconSvg from '../icons/normalized/gate-xor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-xor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender