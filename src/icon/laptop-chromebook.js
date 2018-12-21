import React from 'react';
import iconSvg from '../icons/normalized/laptop-chromebook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laptop-chromebook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender