import React from 'react';
import iconSvg from '../icons/normalized/onenote.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__onenote" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender