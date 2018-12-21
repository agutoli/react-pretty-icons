import React from 'react';
import iconSvg from '../icons/normalized/debug-step-over.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__debug-step-over" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender