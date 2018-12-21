import React from 'react';
import iconSvg from '../icons/normalized/table-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender