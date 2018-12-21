import React from 'react';
import iconSvg from '../icons/normalized/vector-union.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-union" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender