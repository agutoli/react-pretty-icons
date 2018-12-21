import React from 'react';
import iconSvg from '../icons/normalized/table.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender