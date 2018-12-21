import React from 'react';
import iconSvg from '../icons/normalized/alpha-d.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-d" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender