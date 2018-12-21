import React from 'react';
import iconSvg from '../icons/normalized/vector-polygon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-polygon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender