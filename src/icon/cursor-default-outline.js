import React from 'react';
import iconSvg from '../icons/normalized/cursor-default-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor-default-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender