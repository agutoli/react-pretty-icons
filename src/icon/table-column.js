import React from 'react';
import iconSvg from '../icons/normalized/table-column.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-column" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender