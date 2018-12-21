import React from 'react';
import iconSvg from '../icons/normalized/gate-and.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-and" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender