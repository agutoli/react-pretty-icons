import React from 'react';
import iconSvg from '../icons/normalized/visual-studio-code.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__visual-studio-code" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender