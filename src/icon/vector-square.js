import React from 'react';
import iconSvg from '../icons/normalized/vector-square.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-square" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender