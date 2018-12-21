import React from 'react';
import iconSvg from '../icons/normalized/plus-minus-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-minus-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender