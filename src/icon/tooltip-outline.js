import React from 'react';
import iconSvg from '../icons/normalized/tooltip-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooltip-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender