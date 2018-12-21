import React from 'react';
import iconSvg from '../icons/normalized/language-javascript.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-javascript" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender