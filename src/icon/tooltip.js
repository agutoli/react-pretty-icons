import React from 'react';
import iconSvg from '../icons/normalized/tooltip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooltip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender