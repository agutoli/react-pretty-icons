import React from 'react';
import iconSvg from '../icons/normalized/tree.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tree" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender