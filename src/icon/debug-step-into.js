import React from 'react';
import iconSvg from '../icons/normalized/debug-step-into.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__debug-step-into" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender