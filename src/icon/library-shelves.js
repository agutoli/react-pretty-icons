import React from 'react';
import iconSvg from '../icons/normalized/library-shelves.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__library-shelves" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender