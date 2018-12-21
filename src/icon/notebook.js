import React from 'react';
import iconSvg from '../icons/normalized/notebook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__notebook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender