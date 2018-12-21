import React from 'react';
import iconSvg from '../icons/normalized/atom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__atom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender