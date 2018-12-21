import React from 'react';
import iconSvg from '../icons/normalized/key-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender