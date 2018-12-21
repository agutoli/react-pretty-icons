import React from 'react';
import iconSvg from '../icons/normalized/sort-descending.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sort-descending" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender