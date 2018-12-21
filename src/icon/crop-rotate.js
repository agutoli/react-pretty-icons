import React from 'react';
import iconSvg from '../icons/normalized/crop-rotate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__crop-rotate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender