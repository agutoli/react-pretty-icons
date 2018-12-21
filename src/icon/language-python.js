import React from 'react';
import iconSvg from '../icons/normalized/language-python.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-python" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender