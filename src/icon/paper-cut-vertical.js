import React from 'react';
import iconSvg from '../icons/normalized/paper-cut-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__paper-cut-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender