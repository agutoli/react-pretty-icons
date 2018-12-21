import React from 'react';
import iconSvg from '../icons/normalized/table-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender