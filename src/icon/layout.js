import React from 'react';
import iconSvg from '../icons/normalized/layout.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__layout" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender