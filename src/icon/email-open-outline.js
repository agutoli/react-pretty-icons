import React from 'react';
import iconSvg from '../icons/normalized/email-open-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-open-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender