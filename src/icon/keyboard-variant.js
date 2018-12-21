import React from 'react';
import iconSvg from '../icons/normalized/keyboard-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender