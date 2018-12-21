import React from 'react';
import iconSvg from '../icons/normalized/vector-radius.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-radius" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender