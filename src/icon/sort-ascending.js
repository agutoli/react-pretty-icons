import React from 'react';
import iconSvg from '../icons/normalized/sort-ascending.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sort-ascending" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender