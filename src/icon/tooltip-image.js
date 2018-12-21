import React from 'react';
import iconSvg from '../icons/normalized/tooltip-image.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooltip-image" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender