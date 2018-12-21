import React from 'react';
import iconSvg from '../icons/normalized/code-brackets.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__code-brackets" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender