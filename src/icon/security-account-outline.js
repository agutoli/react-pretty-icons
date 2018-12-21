import React from 'react';
import iconSvg from '../icons/normalized/security-account-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__security-account-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender