import React from 'react';
import iconSvg from '../icons/normalized/shopping.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shopping" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender