import React from 'react';
import iconSvg from '../icons/normalized/plus-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender