import React from 'react';
import iconSvg from '../icons/normalized/gavel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gavel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender