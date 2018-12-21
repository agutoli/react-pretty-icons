import React from 'react';
import iconSvg from '../icons/normalized/whatsapp-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__whatsapp-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender