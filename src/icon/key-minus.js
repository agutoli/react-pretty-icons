import React from 'react';
import iconSvg from '../icons/normalized/key-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender