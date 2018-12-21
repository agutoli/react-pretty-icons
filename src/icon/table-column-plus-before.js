import React from 'react';
import iconSvg from '../icons/normalized/table-column-plus-before.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-column-plus-before" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender