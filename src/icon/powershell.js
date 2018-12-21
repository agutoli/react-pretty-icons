import React from 'react';
import iconSvg from '../icons/normalized/powershell.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__powershell" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender