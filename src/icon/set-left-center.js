import React from 'react';
import iconSvg from '../icons/normalized/set-left-center.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-left-center" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender