import React from 'react';
import iconSvg from '../icons/normalized/laptop-mac.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laptop-mac" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender