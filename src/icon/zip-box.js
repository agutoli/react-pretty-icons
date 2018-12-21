import React from 'react';
import iconSvg from '../icons/normalized/zip-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zip-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender