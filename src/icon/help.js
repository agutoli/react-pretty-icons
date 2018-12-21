import React from 'react';
import iconSvg from '../icons/normalized/help.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__help" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender