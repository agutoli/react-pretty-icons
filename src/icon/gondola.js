import React from 'react';
import iconSvg from '../icons/normalized/gondola.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gondola" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender