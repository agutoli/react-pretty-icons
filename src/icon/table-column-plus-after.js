import React from 'react';
import iconSvg from '../icons/normalized/table-column-plus-after.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-column-plus-after" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender