import React from 'react';
import iconSvg from '../icons/normalized/qik-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__qik-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender