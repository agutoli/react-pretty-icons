import React from 'react';
import iconSvg from '../icons/normalized/alpha-o.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-o" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender