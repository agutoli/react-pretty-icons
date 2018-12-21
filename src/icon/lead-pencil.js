import React from 'react';
import iconSvg from '../icons/normalized/lead-pencil.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lead-pencil" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender