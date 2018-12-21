import React from 'react';
import iconSvg from '../icons/normalized/sharing-interface.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sharing-interface" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender