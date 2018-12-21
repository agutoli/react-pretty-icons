import React from 'react';
import iconSvg from '../icons/normalized/table-border.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-border" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender