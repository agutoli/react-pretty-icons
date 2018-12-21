import React from 'react';
import iconSvg from '../icons/normalized/gentoo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gentoo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender