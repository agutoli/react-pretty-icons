import React from 'react';
import iconSvg from '../icons/normalized/translate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__translate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender