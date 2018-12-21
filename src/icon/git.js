import React from 'react';
import iconSvg from '../icons/normalized/git.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__git" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender