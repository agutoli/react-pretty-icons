import React from 'react';
import iconSvg from '../icons/normalized/buffer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__buffer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender