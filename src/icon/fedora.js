import React from 'react';
import iconSvg from '../icons/normalized/fedora.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fedora" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender