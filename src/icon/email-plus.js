import React from 'react';
import iconSvg from '../icons/normalized/email-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender