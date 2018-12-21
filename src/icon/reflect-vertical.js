import React from 'react';
import iconSvg from '../icons/normalized/reflect-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reflect-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender