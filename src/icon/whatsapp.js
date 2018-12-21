import React from 'react';
import iconSvg from '../icons/normalized/whatsapp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__whatsapp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender