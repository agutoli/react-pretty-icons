import React from 'react';
import iconSvg from '../icons/normalized/filter-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__filter-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender