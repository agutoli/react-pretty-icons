import React from 'react';
import iconSvg from '../icons/normalized/gate-xnor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-xnor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender