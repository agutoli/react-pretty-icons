import React from 'react';
import iconSvg from '../icons/normalized/alpha-b.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-b" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender