import React from 'react';
import iconSvg from '../icons/normalized/set-center.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__set-center" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender