import React from 'react';
import iconSvg from '../icons/normalized/language-cpp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-cpp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender