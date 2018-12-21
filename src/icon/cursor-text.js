import React from 'react';
import iconSvg from '../icons/normalized/cursor-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender