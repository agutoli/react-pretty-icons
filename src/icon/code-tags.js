import React from 'react';
import iconSvg from '../icons/normalized/code-tags.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-tags" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender