import React from 'react';
import iconSvg from '../icons/normalized/exponent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__exponent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender