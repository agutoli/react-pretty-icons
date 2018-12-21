import React from 'react';
import iconSvg from '../icons/normalized/phone-locked.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-locked" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender