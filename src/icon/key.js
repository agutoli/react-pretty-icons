import React from 'react';
import iconSvg from '../icons/normalized/key.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender