import React from 'react';
import iconSvg from '../icons/normalized/door-closed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__door-closed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender