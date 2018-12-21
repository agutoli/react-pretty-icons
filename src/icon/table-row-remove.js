import React from 'react';
import iconSvg from '../icons/normalized/table-row-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-row-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender