import React from 'react';
import iconSvg from '../icons/normalized/debug-step-out.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__debug-step-out" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender