import React from 'react';
import iconSvg from '../icons/normalized/code-not-equal-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-not-equal-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender