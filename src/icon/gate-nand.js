import React from 'react';
import iconSvg from '../icons/normalized/gate-nand.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-nand" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender