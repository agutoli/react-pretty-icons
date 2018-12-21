import React from 'react';
import iconSvg from '../icons/normalized/source-merge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__source-merge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender