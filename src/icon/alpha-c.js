import React from 'react';
import iconSvg from '../icons/normalized/alpha-c.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-c" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender