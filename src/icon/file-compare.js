import React from 'react';
import iconSvg from '../icons/normalized/file-compare.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-compare" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender