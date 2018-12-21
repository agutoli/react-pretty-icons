import React from 'react';
import iconSvg from '../icons/normalized/github-logo-1.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__github-logo-1" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender