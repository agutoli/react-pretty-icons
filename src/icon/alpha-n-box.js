import React from 'react';
import iconSvg from '../icons/normalized/alpha-n-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-n-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender