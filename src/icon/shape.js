import React from 'react';
import iconSvg from '../icons/normalized/shape.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shape" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender