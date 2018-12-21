import React from 'react';
import iconSvg from '../icons/normalized/flip-to-front.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flip-to-front" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender