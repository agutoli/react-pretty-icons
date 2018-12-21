import React from 'react';
import iconSvg from '../icons/normalized/indent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__indent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender