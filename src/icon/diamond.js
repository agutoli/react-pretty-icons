import React from 'react';
import iconSvg from '../icons/normalized/diamond.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__diamond" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender