import React from 'react';
import iconSvg from '../icons/normalized/close-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__close-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender