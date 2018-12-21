import React from 'react';
import iconSvg from '../icons/normalized/github-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__github-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender