import React from 'react';
import iconSvg from '../icons/normalized/code-not-equal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-not-equal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender