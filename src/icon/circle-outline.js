import React from 'react';
import iconSvg from '../icons/normalized/circle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__circle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender