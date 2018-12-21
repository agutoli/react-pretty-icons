import React from 'react';
import iconSvg from '../icons/normalized/ubuntu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ubuntu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender