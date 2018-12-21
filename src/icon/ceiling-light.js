import React from 'react';
import iconSvg from '../icons/normalized/ceiling-light.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ceiling-light" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender