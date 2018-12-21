import React from 'react';
import iconSvg from '../icons/normalized/paw-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__paw-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender