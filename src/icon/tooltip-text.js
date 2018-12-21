import React from 'react';
import iconSvg from '../icons/normalized/tooltip-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooltip-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender