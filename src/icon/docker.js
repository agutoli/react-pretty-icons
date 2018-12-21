import React from 'react';
import iconSvg from '../icons/normalized/docker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__docker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender