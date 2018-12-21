import React from 'react';
import iconSvg from '../icons/normalized/set-top-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-top-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender