import React from 'react';
import iconSvg from '../icons/normalized/engine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__engine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender