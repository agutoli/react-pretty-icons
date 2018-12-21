import React from 'react';
import iconSvg from '../icons/normalized/gradient.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gradient" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender