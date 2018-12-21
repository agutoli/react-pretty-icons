import React from 'react';
import iconSvg from '../icons/normalized/language-typescript.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-typescript" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender