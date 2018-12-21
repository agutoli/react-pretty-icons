import React from 'react';
import iconSvg from '../icons/normalized/desktop-classic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__desktop-classic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender