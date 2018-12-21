import React from 'react';
import iconSvg from '../icons/normalized/code-string.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-string" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender