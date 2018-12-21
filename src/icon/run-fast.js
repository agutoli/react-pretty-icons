import React from 'react';
import iconSvg from '../icons/normalized/run-fast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__run-fast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender