import React from 'react';
import iconSvg from '../icons/normalized/alpha-w.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-w" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender