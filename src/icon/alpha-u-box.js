import React from 'react';
import iconSvg from '../icons/normalized/alpha-u-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-u-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender