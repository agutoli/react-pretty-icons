import React from 'react';
import iconSvg from '../icons/normalized/language-csharp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-csharp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender