import React from 'react';
import iconSvg from '../icons/normalized/vector-triangle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-triangle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender