import React from 'react';
import iconSvg from '../icons/normalized/rotate-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rotate-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender