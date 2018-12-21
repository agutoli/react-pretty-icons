import React from 'react';
import iconSvg from '../icons/normalized/table-row-plus-after.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-row-plus-after" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender