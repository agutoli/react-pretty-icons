import React from 'react';
import iconSvg from '../icons/normalized/file-cabinet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-cabinet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender