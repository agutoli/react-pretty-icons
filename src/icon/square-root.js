import React from 'react';
import iconSvg from '../icons/normalized/square-root.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-root" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender