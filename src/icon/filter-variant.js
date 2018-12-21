import React from 'react';
import iconSvg from '../icons/normalized/filter-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__filter-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender