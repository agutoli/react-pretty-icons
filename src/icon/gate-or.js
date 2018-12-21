import React from 'react';
import iconSvg from '../icons/normalized/gate-or.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-or" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender