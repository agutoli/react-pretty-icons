import React from 'react';
import iconSvg from '../icons/normalized/shopping-purse-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shopping-purse-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender