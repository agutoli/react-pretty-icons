import React from 'react';
import iconSvg from '../icons/normalized/phone-forward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__phone-forward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender