import React from 'react';
import iconSvg from '../icons/normalized/source-commit-end-local.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-commit-end-local" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender