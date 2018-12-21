import React from 'react';
import iconSvg from '../icons/normalized/key-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender