import React from 'react';
import iconSvg from '../icons/normalized/security-home.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security-home" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender