import React from 'react';
import iconSvg from '../icons/normalized/burst-mode.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__burst-mode" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender