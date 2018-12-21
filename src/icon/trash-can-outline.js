import React from 'react';
import iconSvg from '../icons/normalized/trash-can-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trash-can-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender