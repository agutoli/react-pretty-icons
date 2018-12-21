import React from 'react';
import iconSvg from '../icons/normalized/square-medium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-medium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender