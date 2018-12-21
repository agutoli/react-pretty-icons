import React from 'react';
import iconSvg from '../icons/normalized/code-parentheses.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-parentheses" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender