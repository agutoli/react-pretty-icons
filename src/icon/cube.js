import React from 'react';
import iconSvg from '../icons/normalized/cube.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cube" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender