import React from 'react';
import iconSvg from '../icons/normalized/sort.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sort" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender