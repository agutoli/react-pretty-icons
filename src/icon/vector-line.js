import React from 'react';
import iconSvg from '../icons/normalized/vector-line.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-line" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender