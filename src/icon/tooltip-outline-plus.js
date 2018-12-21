import React from 'react';
import iconSvg from '../icons/normalized/tooltip-outline-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooltip-outline-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender