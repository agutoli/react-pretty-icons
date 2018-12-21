import React from 'react';
import iconSvg from '../icons/normalized/braille.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__braille" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender