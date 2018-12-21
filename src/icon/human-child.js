import React from 'react';
import iconSvg from '../icons/normalized/human-child.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-child" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender