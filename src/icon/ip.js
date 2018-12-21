import React from 'react';
import iconSvg from '../icons/normalized/ip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender