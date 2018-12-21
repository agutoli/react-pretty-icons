import React from 'react';
import iconSvg from '../icons/normalized/shredder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shredder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender