import React from 'react';
import iconSvg from '../icons/normalized/google-spreadsheet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-spreadsheet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender