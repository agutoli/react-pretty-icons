import React from 'react';
import iconSvg from '../icons/normalized/view-column.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-column" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender