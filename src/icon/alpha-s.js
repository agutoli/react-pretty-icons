import React from 'react';
import iconSvg from '../icons/normalized/alpha-s.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-s" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender