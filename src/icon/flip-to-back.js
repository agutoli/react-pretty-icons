import React from 'react';
import iconSvg from '../icons/normalized/flip-to-back.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flip-to-back" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender