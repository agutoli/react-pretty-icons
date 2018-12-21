import React from 'react';
import iconSvg from '../icons/normalized/code-less-than.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-less-than" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender