import React from 'react';
import iconSvg from '../icons/normalized/phone-rotate-portrait.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-rotate-portrait" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender