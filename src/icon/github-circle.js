import React from 'react';
import iconSvg from '../icons/normalized/github-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__github-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender