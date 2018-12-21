import React from 'react';
import iconSvg from '../icons/normalized/email.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender