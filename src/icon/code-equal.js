import React from 'react';
import iconSvg from '../icons/normalized/code-equal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-equal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender