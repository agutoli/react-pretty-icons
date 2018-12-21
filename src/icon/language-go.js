import React from 'react';
import iconSvg from '../icons/normalized/language-go.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__language-go" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender