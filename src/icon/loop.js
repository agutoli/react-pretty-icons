import React from 'react';
import iconSvg from '../icons/normalized/loop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__loop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender