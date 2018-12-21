import React from 'react';
import iconSvg from '../icons/normalized/circle-edit-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__circle-edit-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender