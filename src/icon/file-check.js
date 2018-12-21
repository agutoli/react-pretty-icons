import React from 'react';
import iconSvg from '../icons/normalized/file-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender