import React from 'react';
import iconSvg from '../icons/normalized/github-face.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__github-face" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender