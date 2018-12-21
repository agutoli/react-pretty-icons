import React from 'react';
import iconSvg from '../icons/normalized/periodic-table.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__periodic-table" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender