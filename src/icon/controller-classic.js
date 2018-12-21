import React from 'react';
import iconSvg from '../icons/normalized/controller-classic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__controller-classic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender