import React from 'react';
import iconSvg from '../icons/normalized/plus-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender