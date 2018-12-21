import React from 'react';
import iconSvg from '../icons/normalized/thumbs-up-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__thumbs-up-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender