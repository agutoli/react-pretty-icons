import React from 'react';
import iconSvg from '../icons/normalized/door.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__door" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender