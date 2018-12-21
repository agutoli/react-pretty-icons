import React from 'react';
import iconSvg from '../icons/normalized/bomb-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bomb-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender