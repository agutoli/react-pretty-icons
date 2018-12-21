import React from 'react';
import iconSvg from '../icons/normalized/alpha-p.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-p" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender