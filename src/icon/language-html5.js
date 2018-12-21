import React from 'react';
import iconSvg from '../icons/normalized/language-html5.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-html5" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender