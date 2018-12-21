import React from 'react';
import iconSvg from '../icons/normalized/code-braces.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-braces" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender