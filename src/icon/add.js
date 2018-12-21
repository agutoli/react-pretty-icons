import React from 'react';
import iconSvg from '../icons/normalized/add.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__add" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender