import React from 'react';
import iconSvg from '../icons/normalized/file-find.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-find" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender