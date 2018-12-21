import React from 'react';
import iconSvg from '../icons/normalized/square-root-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-root-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender