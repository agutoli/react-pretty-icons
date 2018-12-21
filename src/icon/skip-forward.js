import React from 'react';
import iconSvg from '../icons/normalized/skip-forward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skip-forward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender