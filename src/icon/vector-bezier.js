import React from 'react';
import iconSvg from '../icons/normalized/vector-bezier.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-bezier" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender