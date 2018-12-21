import React from 'react';
import iconSvg from '../icons/normalized/view-parallel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-parallel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender