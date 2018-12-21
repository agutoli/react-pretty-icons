import React from 'react';
import iconSvg from '../icons/normalized/source-branch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-branch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender