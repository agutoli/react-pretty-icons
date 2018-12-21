import React from 'react';
import iconSvg from '../icons/normalized/sign-text.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sign-text" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender