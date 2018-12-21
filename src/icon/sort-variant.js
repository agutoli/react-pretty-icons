import React from 'react';
import iconSvg from '../icons/normalized/sort-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sort-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender