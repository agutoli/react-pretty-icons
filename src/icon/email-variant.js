import React from 'react';
import iconSvg from '../icons/normalized/email-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender