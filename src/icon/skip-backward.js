import React from 'react';
import iconSvg from '../icons/normalized/skip-backward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__skip-backward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender