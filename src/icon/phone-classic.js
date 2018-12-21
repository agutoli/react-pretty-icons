import React from 'react';
import iconSvg from '../icons/normalized/phone-classic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-classic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender