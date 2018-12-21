import React from 'react';
import iconSvg from '../icons/normalized/desktop-mac.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__desktop-mac" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender