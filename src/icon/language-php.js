import React from 'react';
import iconSvg from '../icons/normalized/language-php.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-php" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender