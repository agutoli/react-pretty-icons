import React from 'react';
import iconSvg from '../icons/normalized/plus-one.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-one" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender