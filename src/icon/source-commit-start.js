import React from 'react';
import iconSvg from '../icons/normalized/source-commit-start.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-commit-start" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender