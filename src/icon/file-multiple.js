import React from 'react';
import iconSvg from '../icons/normalized/file-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender