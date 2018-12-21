import React from 'react';
import iconSvg from '../icons/normalized/language-java.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-java" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender