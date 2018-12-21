import React from 'react';
import iconSvg from '../icons/normalized/email-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender