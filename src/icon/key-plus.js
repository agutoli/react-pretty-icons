import React from 'react';
import iconSvg from '../icons/normalized/key-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender