import React from 'react';
import iconSvg from '../icons/normalized/alpha-x.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-x" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender