import React from 'react';
import iconSvg from '../icons/normalized/sort-numeric.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sort-numeric" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender