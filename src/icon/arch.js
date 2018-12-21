import React from 'react';
import iconSvg from '../icons/normalized/arch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender