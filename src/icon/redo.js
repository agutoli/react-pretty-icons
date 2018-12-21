import React from 'react';
import iconSvg from '../icons/normalized/redo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__redo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender