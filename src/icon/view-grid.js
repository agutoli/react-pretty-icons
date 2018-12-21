import React from 'react';
import iconSvg from '../icons/normalized/view-grid.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-grid" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender