import React from 'react';
import iconSvg from '../icons/normalized/crop-square.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crop-square" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender