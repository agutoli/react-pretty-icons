import React from 'react';
import iconSvg from '../icons/normalized/database-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__database-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender