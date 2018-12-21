import React from 'react';
import iconSvg from '../icons/normalized/language-c.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-c" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender