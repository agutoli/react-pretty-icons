import React from 'react';
import iconSvg from '../icons/normalized/lyft.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lyft" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender