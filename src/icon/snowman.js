import React from 'react';
import iconSvg from '../icons/normalized/snowman.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__snowman" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender