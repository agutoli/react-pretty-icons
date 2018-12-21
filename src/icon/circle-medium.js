import React from 'react';
import iconSvg from '../icons/normalized/circle-medium.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__circle-medium" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender