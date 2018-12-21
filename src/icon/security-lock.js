import React from 'react';
import iconSvg from '../icons/normalized/security-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender