import React from 'react';
import iconSvg from '../icons/normalized/vector-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender