import React from 'react';
import iconSvg from '../icons/normalized/alpha-h.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-h" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender