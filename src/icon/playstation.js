import React from 'react';
import iconSvg from '../icons/normalized/playstation.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__playstation" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender