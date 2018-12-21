import React from 'react';
import iconSvg from '../icons/normalized/floppy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__floppy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender