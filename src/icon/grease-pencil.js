import React from 'react';
import iconSvg from '../icons/normalized/grease-pencil.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__grease-pencil" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender