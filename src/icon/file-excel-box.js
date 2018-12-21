import React from 'react';
import iconSvg from '../icons/normalized/file-excel-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-excel-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender