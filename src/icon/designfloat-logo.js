import React from 'react';
import iconSvg from '../icons/normalized/designfloat-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__designfloat-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender