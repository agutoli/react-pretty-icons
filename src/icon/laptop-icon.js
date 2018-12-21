import React from 'react';
import iconSvg from '../icons/normalized/laptop-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laptop-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender