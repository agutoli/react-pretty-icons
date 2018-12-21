import React from 'react';
import iconSvg from '../icons/normalized/set-center-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-center-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender