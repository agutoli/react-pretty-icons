import React from 'react';
import iconSvg from '../icons/normalized/beach.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__beach" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender