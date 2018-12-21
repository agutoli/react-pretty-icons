import React from 'react';
import iconSvg from '../icons/normalized/alpha-e.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-e" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender