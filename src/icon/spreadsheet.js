import React from 'react';
import iconSvg from '../icons/normalized/spreadsheet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spreadsheet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender