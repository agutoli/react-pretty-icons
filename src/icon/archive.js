import React from 'react';
import iconSvg from '../icons/normalized/archive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__archive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender