import React from 'react';
import iconSvg from '../icons/normalized/nativescript.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nativescript" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender