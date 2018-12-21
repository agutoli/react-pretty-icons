import React from 'react';
import iconSvg from '../icons/normalized/library.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__library" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender