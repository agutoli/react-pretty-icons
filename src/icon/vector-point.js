import React from 'react';
import iconSvg from '../icons/normalized/vector-point.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-point" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender