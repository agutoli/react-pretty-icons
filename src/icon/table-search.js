import React from 'react';
import iconSvg from '../icons/normalized/table-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender