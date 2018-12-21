import React from 'react';
import iconSvg from '../icons/normalized/login-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__login-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender