import React from 'react';
import iconSvg from '../icons/normalized/source-fork.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-fork" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender