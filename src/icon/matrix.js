import React from 'react';
import iconSvg from '../icons/normalized/matrix.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__matrix" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender