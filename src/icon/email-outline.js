import React from 'react';
import iconSvg from '../icons/normalized/email-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender