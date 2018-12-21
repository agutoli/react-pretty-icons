import React from 'react';
import iconSvg from '../icons/normalized/security-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender