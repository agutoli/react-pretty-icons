import React from 'react';
import iconSvg from '../icons/normalized/email-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender