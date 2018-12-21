import React from 'react';
import iconSvg from '../icons/normalized/bottle-wine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bottle-wine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender