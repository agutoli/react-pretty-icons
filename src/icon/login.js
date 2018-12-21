import React from 'react';
import iconSvg from '../icons/normalized/login.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__login" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender