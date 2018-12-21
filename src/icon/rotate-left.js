import React from 'react';
import iconSvg from '../icons/normalized/rotate-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rotate-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender