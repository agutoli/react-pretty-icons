import React from 'react';
import iconSvg from '../icons/normalized/code-greater-than.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-greater-than" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender