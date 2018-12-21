import React from 'react';
import iconSvg from '../icons/normalized/square.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender