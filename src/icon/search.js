import React from 'react';
import iconSvg from '../icons/normalized/search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender