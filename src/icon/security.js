import React from 'react';
import iconSvg from '../icons/normalized/security.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender