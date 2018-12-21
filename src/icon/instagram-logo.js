import React from 'react';
import iconSvg from '../icons/normalized/instagram-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__instagram-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender