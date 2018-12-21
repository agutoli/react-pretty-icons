import React from 'react';
import iconSvg from '../icons/normalized/view-module.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-module" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender