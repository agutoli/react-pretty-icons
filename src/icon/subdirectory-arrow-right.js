import React from 'react';
import iconSvg from '../icons/normalized/subdirectory-arrow-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__subdirectory-arrow-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender