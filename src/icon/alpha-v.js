import React from 'react';
import iconSvg from '../icons/normalized/alpha-v.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-v" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender