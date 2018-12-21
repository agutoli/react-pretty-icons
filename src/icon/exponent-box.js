import React from 'react';
import iconSvg from '../icons/normalized/exponent-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__exponent-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender