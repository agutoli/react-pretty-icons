import React from 'react';
import iconSvg from '../icons/normalized/rocket.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rocket" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender