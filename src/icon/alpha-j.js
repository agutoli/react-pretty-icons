import React from 'react';
import iconSvg from '../icons/normalized/alpha-j.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-j" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender