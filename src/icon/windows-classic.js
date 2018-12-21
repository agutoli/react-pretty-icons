import React from 'react';
import iconSvg from '../icons/normalized/windows-classic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__windows-classic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender