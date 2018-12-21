import React from 'react';
import iconSvg from '../icons/normalized/alpha-y-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-y-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender