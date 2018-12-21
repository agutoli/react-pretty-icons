import React from 'react';
import iconSvg from '../icons/normalized/view-quilt.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-quilt" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender