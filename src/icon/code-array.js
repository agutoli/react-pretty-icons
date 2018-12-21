import React from 'react';
import iconSvg from '../icons/normalized/code-array.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-array" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender