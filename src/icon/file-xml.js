import React from 'react';
import iconSvg from '../icons/normalized/file-xml.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-xml" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender