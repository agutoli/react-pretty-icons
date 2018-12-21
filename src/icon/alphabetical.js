import React from 'react';
import iconSvg from '../icons/normalized/alphabetical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alphabetical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender