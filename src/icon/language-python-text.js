import React from 'react';
import iconSvg from '../icons/normalized/language-python-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-python-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender