import React from 'react';
import iconSvg from '../icons/normalized/email-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender