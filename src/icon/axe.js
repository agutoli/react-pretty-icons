import React from 'react';
import iconSvg from '../icons/normalized/axe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__axe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender