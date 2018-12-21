import React from 'react';
import iconSvg from '../icons/normalized/reload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender