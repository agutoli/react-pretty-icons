import React from 'react';
import iconSvg from '../icons/normalized/peace.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__peace" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender