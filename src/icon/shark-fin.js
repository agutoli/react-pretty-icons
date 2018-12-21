import React from 'react';
import iconSvg from '../icons/normalized/shark-fin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shark-fin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender