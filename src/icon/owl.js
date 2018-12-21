import React from 'react';
import iconSvg from '../icons/normalized/owl.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__owl" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender