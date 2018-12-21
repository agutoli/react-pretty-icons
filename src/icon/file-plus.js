import React from 'react';
import iconSvg from '../icons/normalized/file-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender