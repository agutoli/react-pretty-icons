import React from 'react';
import iconSvg from '../icons/normalized/trackpad-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trackpad-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender