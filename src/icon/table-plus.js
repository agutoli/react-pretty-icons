import React from 'react';
import iconSvg from '../icons/normalized/table-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender