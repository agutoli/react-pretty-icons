import React from 'react';
import iconSvg from '../icons/normalized/file-delimited.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-delimited" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender