import React from 'react';
import iconSvg from '../icons/normalized/balloon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__balloon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender