import React from 'react';
import iconSvg from '../icons/normalized/source-pull.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-pull" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender