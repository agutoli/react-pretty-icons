import React from 'react';
import iconSvg from '../icons/normalized/security-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender